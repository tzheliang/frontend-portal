import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unathorized',
};

export default function Error401() {
  return (
    <div className="flex flex-col flex-auto items-center justify-center min-w-0">
      <p>You are not authorized to view this page. Please sign in.</p>
      <p>TODO: router link back to login page</p>
    </div>
  );
}
