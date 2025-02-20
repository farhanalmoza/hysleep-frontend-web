import API from './api';

export const updateUser = async (data: any) => {
  try {
    const response = await API.post('/users/public/update', data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data
  }
};