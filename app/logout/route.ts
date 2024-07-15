import { destroySession } from '@/app/lib/auth';

export async function POST(request: Request): Promise<Response> {
  try {
    await destroySession();
  } catch {
  } finally {
    return Response.redirect(new URL('/login', request.url));
  }
}
