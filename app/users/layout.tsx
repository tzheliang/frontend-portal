import React from 'react';
import { Metadata } from 'next';
import Footer from '../ui/footer';
import Header from '../ui/header';
import { verifyAuthSession } from '../lib/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Users List',
};

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authResult = await verifyAuthSession();

  if (!authResult.user) {
    return redirect('/error-401');
  }

  return (
    <div className="flex flex-col flex-auto h-full w-full">
      <div className="flex flex-row flex-grow-0 h-16">
        <Header />
      </div>
      <div className="flex flex-col flex-auto p-8">{children}</div>
      <div className="flex flex-row flex-grow-0">
        <Footer footerText="Created by Zheliang" />
      </div>
    </div>
  );
}
