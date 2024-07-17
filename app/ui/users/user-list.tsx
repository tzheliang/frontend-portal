'use client';

import UserCard from './user-card';
import { useAppSelector } from '@/app/lib/hooks';
import { selectUserList } from '@/app/lib/features/users/userListSlice';

export default function UserList() {
  const users = useAppSelector(selectUserList);

  return (
    <div>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
