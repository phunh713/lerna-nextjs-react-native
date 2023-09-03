import { RouteConfig } from '../interface';

export const routesConfig: RouteConfig = [
  {
    path: '/',
    roles: ['*'],
    type: 'unauthenticated',
  },
  {
    path: '/dashboard',
    roles: ['*'],
    type: 'authenticated',
  },
  {
    path: '/profile',
    roles: ['*'],
    type: 'authenticated',
  },
];
