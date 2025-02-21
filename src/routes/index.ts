import { lazy } from 'react';

const Room = lazy(() => import('../pages/Room'));
const AddRoom = lazy(() => import('../pages/Room/add'));
const EditRoom = lazy(() => import('../pages/Room/edit'));
const Category = lazy(() => import('../pages/Category'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Password = lazy(() => import('../pages/Password'));
const Bookings = lazy(() => import('../pages/Booking'));

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
  },
  {
    path: '/room/add',
    title: 'Add Room',
    component: AddRoom,
  },
  {
    path: '/room/edit/:id',
    title: 'Edit Room',
    component: EditRoom,
  },
  {
    path: '/category',
    title: 'Category',
    component: Category,
  },
  {
    path: '/changePassword',
    title: 'Password',
    component: Password,
  },
  {
    path: '/bookings',
    title: 'Bookings',
    component: Bookings,
  }
];

const routes = [...coreRoutes];
export default routes;
