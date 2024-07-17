import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { User } from '../../types';

export interface UserListState {
  users: User[];
}

const initialState: UserListState = {
  users: [],
};

// support create.asyncThunk with createSlice
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const userListSlice = createAppSlice({
  name: 'userList',
  initialState,
  reducers: (create) => ({
    getUserList: create.asyncThunk(
      async () => {
        const response = await fetch('/api/users', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        return await response.json();
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload;
        },
      }
    ),
    getMaskedUser: create.asyncThunk(
      async (userId: string) => {
        const qs = new URLSearchParams({ maskEmail: 'y' }).toString();
        const response = await fetch(`/api/users/${userId}?` + qs, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        return await response.json();
      },
      {
        fulfilled: (state, action) => {
          const userIdx = state.users.findIndex(
            (user) => user.id === action.payload.id
          );

          state.users[userIdx] = action.payload;
        },
      }
    ),
    getUnmaskedUser: create.asyncThunk(
      async (userId: string) => {
        const qs = new URLSearchParams({ maskEmail: 'n' }).toString();
        const response = await fetch(`/api/users/${userId}?` + qs, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        return await response.json();
      },
      {
        fulfilled: (state, action) => {
          const userIdx = state.users.findIndex(
            (user) => user.id === action.payload.id
          );

          state.users[userIdx] = action.payload;
        },
      }
    ),
  }),
  selectors: {
    selectUserList: (userList) => userList.users,
  },
});

export const { getUserList, getMaskedUser, getUnmaskedUser } =
  userListSlice.actions;

export const { selectUserList } = userListSlice.selectors;
