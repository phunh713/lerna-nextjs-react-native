import jwtDecode from 'jwt-decode';
import {
  BaseTokenClaims,
  RefreshAccessTokenParams,
  RefreshTokenResponse,
} from '../interface/token';
import constants from '../constants';
import axios, { AxiosError } from 'axios';
import { Store } from '../interface';
import { setAccessToken } from '../redux/authentication/actions';

export const checkTokenExpired = (token: string) => {
  if (!token) throw new Error('No token provided to be decoded');
  const { exp } = jwtDecode<BaseTokenClaims>(token);
  const nowTimeStamp = new Date().getTime() - 10000; // get time stamp of 10 seconds ago from now

  if (nowTimeStamp > exp * 1000) return true;
  return false;
};

export const refreshAccessToken = async (params: RefreshAccessTokenParams) => {
  if (!params.refreshToken)
    throw new Error("Can't refresh token because no refresh_token provided");

  console.log('ABOUT TO REFRESH TOKEN');

  try {
    const payload = new URLSearchParams();
    payload.append('grant_type', 'refresh_token');
    payload.append('client_id', params.clientId);
    payload.append('refresh_token', params.refreshToken);
    payload.append('scope', `offline_access openid ${params.clientId}`);
    if (!params.isPublicApp)
      payload.append('client_secret', params.clientSecret ?? '');

    // should not use baseClient, because it will be intercepted and check for token expiration => infinite loop
    const response = await axios.post<RefreshTokenResponse>(
      constants.azure.TOKEN_ENDPOINT,
      payload.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.log({ error });
    console.log((error as AxiosError).response?.data);
    console.log((error as AxiosError).config?.headers);
    throw new Error('Something went wrong while refresh access token');
  }
};

export const getAccessToken = async (
  store: Store,
  getRefreshToken: (refreshToken?: string) => Promise<string>
) => {
  const { accessToken, refreshToken } = store.getState().authentication;
  if (!accessToken) {
    return '';
  }

  if (!checkTokenExpired(accessToken)) {
    return accessToken;
  }
  const newAccessToken = await getRefreshToken(refreshToken);

  store.dispatch(setAccessToken(newAccessToken));
  return newAccessToken;
};
