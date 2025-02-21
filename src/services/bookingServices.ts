import API from './api';


export const getAllBooking = async() => {
  try {
    const res = await API.post('/booking/admin/getAll');
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}