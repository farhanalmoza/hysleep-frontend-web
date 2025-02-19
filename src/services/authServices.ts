import API from './api';

export const authService = {
  login: (credentials: any) => API.post('users/login', credentials),
  register: (credentials: any) => API.post('users/register', credentials),
};
