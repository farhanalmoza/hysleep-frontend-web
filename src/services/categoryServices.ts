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
  } catch (error: any) {
    console.log("Error", error);
    throw error.response.data;
  }
}

export const updateCategory = async(data: any) => {
  try {
    const res = await API.post('category/public/update-name', data, {
      headers: {
        "ngrok-skip-browser-warning": "69420"
      },
    });
    return res.data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export const deleteCategory = async(id: any) => {
  try {
    const res = await API.post('category/public/delete-category?categoryId=' + id, {
      headers: {
        "ngrok-skip-browser-warning": "69420"
      },
    });
    return res.data;
  } catch (error: any) {
    console.log("Error", error.response.data);
    throw error.response.data;
  }
}