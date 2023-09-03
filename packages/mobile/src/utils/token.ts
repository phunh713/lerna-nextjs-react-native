import {constants, utils} from 'common';

export const refreshTokenFn = async (refreshToken?: string) => {
  const newAccessToken = await utils.token.refreshAccessToken({
    clientId: constants.azure.MOBILE_CLIENT_ID,
    isPublicApp: true,
    refreshToken: refreshToken ?? '',
  });

  return newAccessToken;
};
