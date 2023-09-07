export type GetAccessToken = () => Promise<string> | string;

export interface BaseTokenClaims {
  ver: string;
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  nonce: string;
  iat: number;
  tfp: string;
  nbf: number;
}

export interface AccessTokenClaims extends BaseTokenClaims {
  name: string;
  given_name: string;
  family_name: string;
  extension_Roles: string;
  emails?: string[];
}

export interface RefreshTokenResponse {
  not_before: string;
  token_type: string;
  access_token: string;
  scope: string;
  expires_in: string;
  refresh_token: string;
}

export interface RefreshAccessTokenParams {
  refreshToken: string;
  clientId: string;
  clientSecret?: string;
  isPublicApp: boolean;
}
