import axios from 'axios';

import { addInterceptor } from './interceptor';
import constants from '../constants';
import { GetAccessToken } from '../interface';

const baseClient = axios.create({
  baseURL: constants.common.BASE_URL,
  withCredentials: true,
});

export const initHttpClient = (getAccessToken: GetAccessToken) => {
  addInterceptor(baseClient, getAccessToken);
};

export default baseClient;
