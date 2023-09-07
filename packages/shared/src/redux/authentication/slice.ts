import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationState, User } from '../../interface/authentication';

const initialState: AuthenticationState = {
  user: null,
  accessToken: undefined,
  refreshToken: undefined,
  roles: [],
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    setRoles(state, action: PayloadAction<string[]>) {
      state.roles = action.payload;
    },
    resetState() {
      return initialState;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
