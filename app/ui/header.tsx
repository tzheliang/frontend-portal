import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex flex-row flex-auto w-full h-full bg-slate-400 rounded-b-md py-4 px-6">
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
