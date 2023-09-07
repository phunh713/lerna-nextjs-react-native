import {
  AnyAction,
  MiddlewareArray,
  ThunkMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import { authenticationSlice } from '../redux/authentication/slice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, ReduxStoreState } from '../interface/redux';

export const store = configureStore<
  ReduxStoreState,
  AnyAction,
  MiddlewareArray<[ThunkMiddleware<ReduxStoreState, AnyAction>]>
>({
  reducer: {
    authentication: authenticationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxStoreState> = useSelector;
