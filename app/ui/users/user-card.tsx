import { User } from '@/app/lib/types';
import Image from 'next/image';
import React from 'react';

export default function UserCard({ user }: { user: User }) {
  return (
    <li className="rounded-2xl bg-white p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row flex-auto items-center min-h-[120px]">
        <div className="flex flex-col flex-shrink-0 md:size-[140px] justify-center items-center">
          <Image
            src={user.avatar}
            alt={`${user.first_name}_${user.last_name}_avatar`}
            width={120}
            height={48}
            priority={false}
          />
        </div>
        <div className="flex flex-col flex-auto md:min-h-[140px] ml-4 p-2 text-wrap">
          <p>
            Name:{' '}
            <span className="font-semibold">
              {user.first_name} {user.last_name}
            </span>
          </p>
          <p className="mt-2">
            Email: <span className="font-semibold">{user.email}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
