import API from './api';

export const getRooms = async() => {
  try {
    const response = await API.post('rooms/public/getAll', {
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

export const createRoom = async(data: any) => {
  try {
    const res = await API.post('rooms/public/createRoom', data, {
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

export const getRoom = async(id: any) => {
  try {
    const res = await API.post(`rooms/public/getById`, {
        roomId: id
      }, {
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

export const updateStatus = async(data: any) => {
  try {
    const res = await API.post('rooms/public/updateStatus', data, {
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

export const deleteRoom = async(id: any) => {
  try {
    const res = await API.post('rooms/public/delete', {
        roomId: id
      }, {
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