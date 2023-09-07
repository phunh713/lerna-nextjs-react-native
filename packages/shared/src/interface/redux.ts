import { store } from '../config/redux';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { AuthenticationState } from './authentication';

export type ReduxStoreState = {
  authentication: AuthenticationState;
};
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxStoreState,
  unknown,
  AnyAction
>;
