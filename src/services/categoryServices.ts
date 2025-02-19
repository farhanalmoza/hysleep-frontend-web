import API from './api';

export const getCategories = async() => {
  try {
    const response = await API.get('category/public/get-all', {
      headers: {
        "ngrok-skip-browser-warning": "69420"
      },
    });    
    return response.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const createCategory = async(data: any) => {
  try {
    const res = await API.post('category/public/create-category', data);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const updateCategory = async(data: any) => {
  try {
    const res = await API.put('category/public/update-name', data);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const deleteCategory = async(data: any) => {
  try {
    const res = await API.delete('category/public/delete-category', data);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}