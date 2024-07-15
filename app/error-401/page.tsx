import { Metadata } from 'next';
import Link from 'next/link';
import { verifyAuthSession } from '../lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Unathorized',
};

export default async function Error401() {
  const { session } = await verifyAuthSession();

  if (session) {
    redirect('/');
  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center min-w-0">
      <p className="text-8xl font-bold">401</p>
      <p className="mt-4 font-bold">
        You are not authorized to view this page. Please sign in.
      </p>

      <div className="mt-4">
        <Link href="/login">
          <button
            type="button"
            className="justify-center rounded-lg text-sm font-semibold py-3 bg-blue-700 px-4 text-white hover:bg-blue-900 w-[145px]"
          >
            Return to Login
          </button>
        </Link>
      </div>
    </div>
  );
}
