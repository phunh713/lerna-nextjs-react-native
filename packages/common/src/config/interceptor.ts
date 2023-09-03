import { AxiosInstance } from 'axios';
import { GetAccessToken } from '../interface';

export const addInterceptor = (
  clientInstance: AxiosInstance,
  getAccessToken: GetAccessToken
) => {
  clientInstance.interceptors.request.use(async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  clientInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
};
