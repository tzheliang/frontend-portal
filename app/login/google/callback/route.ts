import { createAuthSession, google, lucia } from '@/app/lib/auth';
import { cookies } from 'next/headers';
import { OAuth2RequestError } from 'arctic';
import { DatabaseUser, generateIdFromEntropySize } from 'lucia';

import { db } from '@/app/lib/db';

interface GoogleUserProfile {
  id: string;
  name: string;
  given_name: string;
  picture: string;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = cookies().get('state')?.value ?? null;
  const storedCodeVerifier = cookies().get('code_verifier')?.value ?? null;

  if (
    !code ||
    !state ||
    !storedState ||
    !storedCodeVerifier ||
    state !== storedState
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );

    const response = await fetch(`https://www.googleapis.com/userinfo/v2/me`, {
      headers: {
        authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    const googleUser: GoogleUserProfile = await response.json();

    // Replace this with your own DB client.
    const existingUser = db
      .prepare('SELECT * FROM user WHERE google_id = ?')
      .get(googleUser.id) as DatabaseUser | undefined;

    if (existingUser) {
      await createAuthSession(existingUser.id);

      return new Response(null, {
        status: 302,
        headers: {
          Location: '/users',
        },
      });
    }

    const userId = generateIdFromEntropySize(10); // 16 characters long

    // Create the user in DB
    db.prepare('INSERT INTO user (id, google_id, name) VALUES (?, ?, ?)').run(
      userId,
      googleUser.id,
      googleUser.name
    );

    await createAuthSession(userId);

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/users',
      },
    });
  } catch (e) {
    console.error(e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}
