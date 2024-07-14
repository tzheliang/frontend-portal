import UserCard from '../ui/users/user-card';
import { getUsers } from '../lib/user-data';
import { User } from '../lib/types';
import MaskEmailButton from '../ui/users/mask-email-button';
import PaginationBar from '../ui/users/pagination-bar';

type UserPageSearchParams = {
  mask_email?: string;
  page?: string;
};

export default async function Users({
  searchParams,
}: {
  searchParams?: UserPageSearchParams;
}) {
  const maskEmail = (searchParams?.mask_email ?? 'y').toLowerCase() === 'y';
  const currentPage = (() => {
    let pageValue = searchParams?.page ?? '1';

    if (isNaN(+pageValue)) {
      pageValue = '1';
    }

    return +pageValue;
  })();

  let totalPage = 0;
  let users: User[] = [];

  async function fetchUsers() {
    const response = await getUsers(currentPage, maskEmail);
    users = [...users, ...response.data];
    totalPage = response.total_pages;
  }

  await fetchUsers();

  return (
    <div className="flex flex-col flex-auto">
      <p className="text-3xl font-bold">User List</p>

      <div className="mt-4">
        <MaskEmailButton maskEmail={maskEmail} />
      </div>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>

      <div className="mt-4 flex justify-center">
        <PaginationBar currentPage={currentPage} totalPage={totalPage} />
      </div>
    </div>
  );
}
