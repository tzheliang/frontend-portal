import { redirect } from 'next/navigation';
import { verifyAuthSession } from './lib/auth';

export default async function Home() {
  const { session } = await verifyAuthSession();

  if (session) {
    redirect('/users');
  } else {
    redirect('/login');
  }
}
