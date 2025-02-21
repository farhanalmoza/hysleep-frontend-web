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
export const updateUser = async (data: any) => {
  try {
    const response = await API.post('/users/public/update', data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data
  }
};
