import { verifyAuthSession } from '@/app/lib/auth';
import { getUsers } from '@/app/lib/user-data';

export async function GET(): Promise<Response> {
  const { session } = await verifyAuthSession();

  if (!session) {
    return Response.json(
      {
        error: 'Unauthorized access to API',
        statusCode: 401,
      },
      {
        status: 401,
      }
    );
  }

  const users = await getUsers();

  return Response.json(users, { status: 200 });
}
