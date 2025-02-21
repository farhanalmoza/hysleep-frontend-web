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

export const getBookingsByUser = async(data: any) => {
  try {
    console.log(data);
    const res = await API.post('/booking/public/getAllFiltered', data);
    
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}