import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  function handleLogout() {}

  return (
    <div className="flex flex-row flex-auto w-full h-full bg-blue-700 rounded-b-md py-4 px-6 items-center justify-between">
      <Link href="/users">
        <Image
          src="/next.svg"
          alt="Vercel Logo"
          className="invert"
          width={100}
          height={24}
          priority
        />
      </Link>

      <form action="/logout" method="POST">
        <button
          type="submit"
          className="justify-center rounded-lg text-sm font-semibold py-3 bg-red-700 px-4 text-white hover:bg-red-900 w-[100px]"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
