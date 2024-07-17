import UserList from '../ui/users/user-list';

export default async function Users() {
  return (
    <div className="flex flex-col flex-auto">
      <p className="text-3xl font-bold">User List</p>

      <div className="flex flex-col flex-auto mt-6">
        <UserList />
      </div>
    </div>
  );
}
