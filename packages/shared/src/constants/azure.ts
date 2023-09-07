export const TENANT_ID = process.env.AZURE_TENANT_ID ?? '';
export const TENANT_NAME = process.env.AZURE_TENANT_NAME ?? '';
export const POLICY_NAME = process.env.AZURE_POLICY_NAME ?? '';
export const WEBSITE_CLIENT_ID = process.env.AZURE_WEBSITE_CLIENT_ID ?? '';
export const WEBSITE_CLIENT_SECRET =
  process.env.AZURE_WEBSITE_CLIENT_SECRET ?? '';
export const MOBILE_CLIENT_ID = process.env.AZURE_MOBILE_CLIENT_ID ?? '';
export const MOBILE_REDIRECT_URL = process.env.AZURE_MOBILE_REDIRECT_URL ?? '';

const BASE_ENDPOINT = `https://${TENANT_NAME}.b2clogin.com/${TENANT_NAME}.onmicrosoft.com/${POLICY_NAME}`;
export const TOKEN_ENDPOINT = `${BASE_ENDPOINT}/oauth2/v2.0/token`;
export const AUTHORIZE_ENDPOINT = `${BASE_ENDPOINT}/oauth2/v2.0/authorize`;
export const LOGOUT_ENDPOINT = `${BASE_ENDPOINT}/oauth2/v2.0logout`;
export const WELLKNOWN_ENDPOINT = `${BASE_ENDPOINT}/v2.0/.well-known/openid-configuration`;
