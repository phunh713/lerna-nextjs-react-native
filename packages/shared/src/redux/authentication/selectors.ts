import { createSelector } from '@reduxjs/toolkit';
import { ReduxStoreState } from '../../interface/redux';

export const selectIsAuthenticated = createSelector(
  (state: ReduxStoreState) => {
    return state.authentication.user;
  },
  (user) => {
    if (!user) return false;

    return true;
  }
);
