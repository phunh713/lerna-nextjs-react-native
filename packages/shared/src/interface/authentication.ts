export interface User {
  id: string;
  name: string;
  given_name: string;
  family_name: string;
  emails?: string[];
}

export interface AuthenticationState {
  user: User | null;
  accessToken?: string;
  refreshToken?: string;
  roles: string[];
}

interface RouteConfigItem {
  path: string;
  type: 'authenticated' | 'public' | 'unauthenticated';
  roles: string[];
}

export type RouteConfig = RouteConfigItem[];
