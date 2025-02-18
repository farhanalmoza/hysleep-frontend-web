import { lazy } from 'react';

const Room = lazy(() => import('../pages/Room'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/room',
    title: 'Room',
    component: Room,
  }
];

const routes = [...coreRoutes];
export default routes;
