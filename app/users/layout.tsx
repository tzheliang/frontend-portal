import React from 'react';
import { Metadata } from 'next';
import Footer from '../ui/footer';
import Header from '../ui/header';

export const metadata: Metadata = {
  title: 'Users List',
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
