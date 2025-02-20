import toast from 'react-hot-toast';
import { useState } from "react";
import {changePassword} from "../services/userServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';


const ManagePasswordComponent = () => {

const [currentPassword, setCurrentPassword] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showField,setShowField] = useState(false)

function handleShowField(id:string) {
  setShowField(!showField);
  
  const eye = document.getElementById(id) as HTMLInputElement
  if (showField === false && eye) {
    eye.type = 'password'
  } else if (showField === true && eye) {
    eye.type = 'text'
  }
  return;
}

const handleChangePassword = async (e: any) => {
  var currentEmail = localStorage.getItem('email')
  try {
    e.preventDefault();

    if (password.length < 6) {
      setCurrentPassword('');
      setPassword('');
      setConfirmPassword('')
      toast.error('Please use 6 or more character');
      return;
    } else if (password !== confirmPassword) {
      setConfirmPassword('')
      toast.error('Password does not match');
      return;
    }

    const data = {
      currentEmail,
      currentPassword,
      password
    };
    
    await changePassword(data);
    
    toast.success('Password updated succesfully');
    
    setCurrentPassword('');
    setPassword('');
    setConfirmPassword('');
  } catch (error) {
    console.log(error);
    setCurrentPassword('');
    setConfirmPassword('');
    setPassword('');
    toast.error('Something went wrong');
  }
};
  
    return (
      <div className="bg-white rounded-md dark:border-strokedark dark:bg-boxdark">
        <form className={'p-5'} onSubmit={handleChangePassword}>
          <div className={''}>
            <label className={'font-bold font block'}>Current Password</label>
            <input id='eye1' onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
             value={currentPassword} type='password' required placeholder="Enter current password [6+ Characters]" className={'p-2 outline outline-[1.5px] rounded outline-[#EEEEEE] dark:outline-strokedark dark:outline-5 dark:bg-boxdark mt-4 w-6/12'}/>
            <span className={'ml-4 outline outline-[#EEEEEE] p-1 rounded'} onClick={() => handleShowField('eye1')}>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          
          <div className={'mt-5'}>
            <label className={'font-bold font block'}>New Password</label>
            <input id='eye2' onChange={(e) => {
              setPassword(e.target.value);
            }} value={password} type='password' required placeholder="Enter new password [6+ Characters]" className={'p-2 outline outline-[1.5px] rounded outline-[#EEEEEE] mt-4 w-6/12 dark:outline-strokedark dark:bg-boxdark dark:outline-5'}/>
            <span className={'ml-4 outline outline-[#EEEEEE] p-1 rounded'} onClick={() => handleShowField('eye2')}>
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          <div className={'mt-5'}>
            <label className={'font-bold font block'}>Confirm New Password</label>
            <input id='eye3' onChange={(e) => {
              setConfirmPassword(e.target.value);
            }} value={confirmPassword} type='password' required placeholder="Enter new password [6+ Characters]" className={'p-2 outline outline-[1.5px] rounded outline-[#EEEEEE] mt-4 w-6/12 dark:outline-strokedark dark:bg-boxdark dark:outline-5'}/>
            <span className={'ml-4 outline outline-[#EEEEEE] p-1 rounded'} onClick={() => handleShowField('eye3')}>
                <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          <div>
            <button type="submit" className={'bg-graydark mt-5 rounded px-5 py-2 rounded rounded-sm text-white font-semibold hover:outline hover:outline-graydark dark:outline-strokedark dark:outline dark:hover:text-white dark:hover:outline-white dark:outline-5 dark:bg-boxdark hover:outline-1 hover:bg-[#FFFFFF] hover:text-graydark'}>Change Password</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default ManagePasswordComponent;