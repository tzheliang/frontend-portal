import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-auto h-full w-full">
      <div className="flex flex-col flex-auto">{children}</div>
    </div>
  );
}
