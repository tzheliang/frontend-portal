import { verifyAuthSession } from '@/app/lib/auth';
import { getUser } from '@/app/lib/user-data';
import { type NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { session } = await verifyAuthSession();

  const searchParams = request.nextUrl.searchParams;
  const maskEmail = (searchParams.get('maskEmail') ?? 'n').toLowerCase();

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

  const user = await getUser(params.id, maskEmail !== 'n');

  return Response.json(user, { status: 200 });
}
