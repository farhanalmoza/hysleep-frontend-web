import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { updateUser } from '../services/userServices';
import toast from 'react-hot-toast';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName && lastName) {
      setFirstName(firstName);
      setLastName(lastName);
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      currentEmail: localStorage.getItem('email'),
      firstName: firstName,
      lastName: lastName,
    };
    try {
      const res = await updateUser(data);
      localStorage.setItem('firstName', res.firstName);
      localStorage.setItem('lastName', res.lastName);
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Edit Profile" />
      <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1 h-fit">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Edit Profile Form
          </h3>
        </div>
        <div className="grid gap-4 p-6.5">
          <div className="flex flex-row gap-4">
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-success active:border-success disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-success"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {/* {categoryErrorName && (<p className="text-sm text-danger mt-2">{categoryErrorName}</p>)} */}
            </div>
            <div className="w-full">
              <label className="mb-2.5 block text-black dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-success active:border-success disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-success"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* {categoryErrorName && (<p className="text-sm text-danger mt-2">{categoryErrorName}</p>)} */}
            </div>
          </div>

          <button
            className="flex justify-center rounded-lg bg-primary p-3 font-medium text-gray w-1/4"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
