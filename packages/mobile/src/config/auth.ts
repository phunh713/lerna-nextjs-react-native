import {constants} from 'common';
import {AuthConfiguration} from 'react-native-app-auth';

export const config: AuthConfiguration = {
  serviceConfiguration: {
    authorizationEndpoint: constants.azure.AUTHORIZE_ENDPOINT,
    tokenEndpoint: constants.azure.TOKEN_ENDPOINT,
  },
  clientId: constants.azure.MOBILE_CLIENT_ID ?? '',
  redirectUrl: constants.azure.MOBILE_REDIRECT_URL ?? '',
  scopes: [`${constants.azure.MOBILE_CLIENT_ID} offline_access openid`],
};
