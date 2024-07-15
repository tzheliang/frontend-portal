import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-row flex-auto w-full h-full bg-blue-700 rounded-b-md py-4 px-6 items-center">
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
    </div>
  );
}
