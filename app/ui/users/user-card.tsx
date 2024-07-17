'use client';

import { User } from '@/app/lib/types';
import { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/app/lib/hooks';
import {
  getMaskedUser,
  getUnmaskedUser,
} from '@/app/lib/features/users/userListSlice';

export default function UserCard({ user }: { user: User }) {
  const dispatch = useAppDispatch();
  const [maskEmail, setMaskEmail] = useState<boolean>(true);

  function handleMaskEmailButton() {
    const toggleFlag = !maskEmail;
    setMaskEmail(toggleFlag);

    if (toggleFlag) {
      dispatch(getMaskedUser(`${user.id}`));
    } else {
      dispatch(getUnmaskedUser(`${user.id}`));
    }
  }

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

          <div className="mt-4 flex flex-row flex-auto">
            <button
              type="button"
              className="justify-center rounded-lg text-sm font-semibold py-3 bg-blue-700 px-4 text-white hover:bg-blue-900 w-[145px]"
              onClick={handleMaskEmailButton}
            >
              {maskEmail ? 'Un-mask Email' : 'Mask Email'}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
