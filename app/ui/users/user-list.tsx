'use client';

import { User } from '@/app/lib/types';
import UserCard from './user-card';

export default function UserList({ users = [] }: { users: User[] }) {
  return (
    <>
      <div className="mt-4">
        <button
          type="button"
          className="justify-center rounded-lg text-sm font-semibold py-3 bg-cyan-400 px-4 text-white hover:bg-cyan-700"
        >
          Un-mask emails
        </button>
      </div>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}
