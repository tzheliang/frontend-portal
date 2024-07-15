import { generateState, generateCodeVerifier } from 'arctic';
import { google } from '@/app/lib/auth';
import { cookies } from 'next/headers';

/**
 * Tutorial
 * https://arctic.js.org/guides/oauth2-pkce
 */

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const scopes = ['profile'];

  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes,
  });

  // store state verifier as cookie
  cookies().set('state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
  });

  // store code verifier as cookie
  cookies().set('code_verifier', codeVerifier, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
  });

  return Response.redirect(url);
}
