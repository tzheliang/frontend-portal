import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Login() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center min-w-0">
      <div className="flex flex-col justify-center items-center min-w-64">
        <p className="flex flex-auto text-4xl">Insurance Customer Portal</p>
        <p className="flex flex-auto text-lg mt-4">
          To continue, please login with your Google account.
        </p>

        <div className="mt-6">
          <a href="/login/google">
            <button
              type="button"
              className="justify-center rounded-lg text-sm font-semibold py-3 bg-blue-700 px-4 text-white hover:bg-blue-900 w-[145px]"
            >
              Google Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
