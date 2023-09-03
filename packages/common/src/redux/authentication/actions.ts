import { AccessTokenClaims, AppThunk, User } from '../../interface';
import { authenticationActions } from './slice';
import jwtDecode from 'jwt-decode';

export const setAccessToken =
  (accessToken: string): AppThunk<void> =>
  (dispatch) => {
    const claims = jwtDecode<AccessTokenClaims>(accessToken);
    const roles = claims.extension_Roles.split(' ').map((i) => i.trim());
    const user: User = {
      id: claims.sub,
      family_name: claims.family_name,
      given_name: claims.given_name,
      name: claims.name,
      emails: claims.emails,
    };
    dispatch(authenticationActions.setAccessToken(accessToken));
    dispatch(authenticationActions.setRoles(roles));
    dispatch(authenticationActions.setUser(user));
  };
