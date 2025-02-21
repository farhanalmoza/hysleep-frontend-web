import toast from 'react-hot-toast';
import { useState } from "react";
import {changePassword} from "../services/userServices";


const ManagePasswordComponent = () => {

const [currentPassword, setCurrentPassword] = useState("");
const [password, setPassword] = useState("");

const handleChangePassword = async (e: any) => {
  var currentEmail = localStorage.getItem('email')
  try {
    e.preventDefault();

    if (password.length < 6) {
      setCurrentPassword('');
      setPassword('');
      toast.error('Please use 6 or more character');
      return;
    }

    const data = {
      currentEmail,
      currentPassword,
      password
    };
    
    const response = await changePassword(data);
    
    toast.success('Password updated succesfully');
    
    setCurrentPassword('');
    setPassword('');
  } catch (error) {
    console.log(error);
    setCurrentPassword('');
    setPassword('');
    toast.error('Something went wrong');
  }
};
  
    return (
      <div className="bg-white rounded-md dark:border-strokedark dark:bg-boxdark">
        <form className={'p-5'}>
          <div className={''}>
            <label className={'font-bold font block'}>Current Password</label>
            <input onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
             value={currentPassword} type='password' required placeholder="Enter current password [6+ Characters]" className={'p-2 outline outline-[1.5px] rounded outline-[#EEEEEE] dark:outline-strokedark dark:outline-5 dark:bg-boxdark mt-4 w-6/12'}/>
          </div>
          <div className={'mt-5'}>
            <label className={'font-bold font block'}>New Password</label>
            <input onChange={(e) => {
              setPassword(e.target.value);
            }} value={password} type='password' required placeholder="Enter new password [6+ Characters]" className={'p-2 outline outline-[1.5px] rounded outline-[#EEEEEE] mt-4 w-6/12 dark:outline-strokedark dark:bg-boxdark dark:outline-5'}/>
          </div>
          <div>
            <button type="submit" onClick={handleChangePassword} className={'bg-graydark mt-5 rounded px-5 py-2 rounded rounded-sm text-white font-semibold hover:outline hover:outline-graydark dark:outline-strokedark dark:outline dark:hover:text-white dark:hover:outline-white dark:outline-5 dark:bg-boxdark hover:outline-1 hover:bg-[#FFFFFF] hover:text-graydark'}>Change Password</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default ManagePasswordComponent;