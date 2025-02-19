import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryServices";
import toast from "react-hot-toast";
import { createRoom } from "../services/roomServices";

const RoomForm = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [categories, setCategories] = useState([]);

  const [formState, setFormState] = useState({
    roomNumber: '',
    floor: '',
    roomDescription: '',
    categoryId: '',
  });

  const [roomNumberError, setRoomNumberError] = useState(null);
  const [floorError, setFloorError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async() => {
    try {
      const data = await getCategories();
      setCategories(data.data);      
    } catch (error) {
      toast.error('Failed to fetch categories');
    }
  }

  const checkErrorFields = () => {
    var val = false;
    if (formState.roomNumber === '') {
      setRoomNumberError('Room number is required');
      val = true;
    }
    if (formState.floor === '') {
      setFloorError('Floor is required');
      val = true;
    }
    if (formState.categoryId === '') {
      setCategoryError('Category is required');
      val = true;
    }
    if (formState.roomDescription === '') {
      setDescriptionError('Description is required');
      val = true;
    }
    return val;
  };

  const handleSubmit = async(e: any) => {
    if (checkErrorFields()) return;
    e.preventDefault();

    const data = {
      roomNumber: formState.roomNumber,
      floor: formState.floor,
      roomDescription: formState.roomDescription,
      categoryId: parseInt(formState.categoryId),
    };
    
    try {
      const res = await createRoom(data);
      toast.success('Room created successfully');
      setIsEdit(false);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
      <div className="grid gap-4 p-6.5">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <label className="mb-2.5 block text-black dark:text-white">
              Room Number
            </label>
            <input
              type="text"
              placeholder="Input room number"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-success active:border-success disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-success" 
              value={formState.roomNumber}
              onChange={(e) => {
                setFormState({ ...formState, roomNumber: e.target.value });
                setRoomNumberError(null);
              }}
            />
            {roomNumberError && (
              <p className="text-sm text-danger mt-2">{roomNumberError}</p>
            )}
          </div>
          <div className="w-full">
            <label className="mb-2.5 block text-black dark:text-white">
              Floor
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 pr-12 outline-none transition focus:border-success active:border-success dark:border-form-strokedark dark:bg-form-input"
                value={formState.floor}
                onChange={(e) => {
                  setFormState({ ...formState, floor: e.target.value });
                  setFloorError(null);
                }}
              >
                <option value="">Select Floor</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            {floorError && (
              <p className="text-sm text-danger mt-2">{floorError}</p>
            )}
          </div>
          <div className="w-full">
            <label className="mb-2.5 block text-black dark:text-white">
              Category
            </label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-5 pr-12 outline-none transition focus:border-success active:border-success dark:border-form-strokedark dark:bg-form-input"
                value={formState.categoryId}
                onChange={(e) => {
                  setFormState({ ...formState, categoryId: e.target.value });
                  setCategoryError(null);
                }}
              >
                <option value="">Select Category</option>
                {categories.map((item:any,idx:number)=>(<option key={idx} value={item.categoryId}>{item.categoryName}</option>))}
              </select>
              <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            {categoryError && (
              <p className="text-sm text-danger mt-2">{categoryError}</p>
            )}
          </div>
        </div>
        <div className="w-full">
        <label className="mb-2.5 block text-black dark:text-white">
          Description
        </label>
        <textarea
          rows={3}
          placeholder="Room description"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-success active:border-success disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-success"
          value={formState.roomDescription}
          onChange={(e) => {
            setFormState({ ...formState, roomDescription: e.target.value });
            setDescriptionError(null);
          }}
        ></textarea>
        {descriptionError && (
          <p className="text-sm text-danger mt-2">{descriptionError}</p>
        )}
      </div>

        <button
          className="flex justify-center rounded-lg bg-primary p-3 font-medium text-gray w-1/4"
          onClick={handleSubmit}
        >
          {isEdit ? "Update" : "Create"}
        </button>
      </div>
    </div>
  )
}

export default RoomForm;