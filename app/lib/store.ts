import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { userListSlice } from './features/users/userListSlice';

const rootReducer = combineSlices(userListSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
