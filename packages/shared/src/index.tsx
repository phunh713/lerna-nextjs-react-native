import ReduxProvider from './HOC/ReduxProvider';
import { useHello } from './hook/hello';
import {
  Todo,
  RefreshTokenResponse,
  AppThunk,
  Store,
  AccessTokenClaims,
} from './interface';
import { useTodos } from './hook/todos';
import QueryClientProvider from './HOC/QueryClientProvider';
import { authenticationActions } from './redux/authentication/slice';
import { useAppDispatch, useAppSelector, store } from './config/redux';
import constants from './constants';
import utils from './utils';
import baseClient, { initHttpClient } from './config/axios';
import config from './config';
import { setAccessToken } from './redux/authentication/actions';

// HOC
export { ReduxProvider as Provider, QueryClientProvider, ReduxProvider };

// hooks
export { useHello, useTodos };

// interfaces
export { Todo, RefreshTokenResponse, AppThunk, Store, AccessTokenClaims };

// stores
export {
  authenticationActions,
  useAppDispatch,
  useAppSelector,
  store,
  setAccessToken,
};

// constants
export { constants };

// utils
export { utils };

// axios
export { initHttpClient, baseClient };

// configs
export { config };
