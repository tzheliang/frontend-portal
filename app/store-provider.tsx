'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './lib/store';
import { getUserList } from './lib/features/users/userListSlice';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Load the state when page is loaded
    storeRef.current.dispatch(getUserList());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
