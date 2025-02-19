import API from './api';


export const changePassword = async(data: any) => {
  try {
    const res = await API.post('/users/public/update-password', data);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}