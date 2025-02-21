import toast from 'react-hot-toast';
import { useState } from "react";
import {changePassword} from "../services/userServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';


const ManagePasswordComponent = () => {

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showField,setShowField] = useState(false)
  const [eyeStates, setEyeStates] = useState([false, false, false]);

  function handleShowField(id:string, iconIndex:number) {
    setShowField(!showField);
    
    const eye = document.getElementById(id) as HTMLInputElement
    const newStates = [...eyeStates]
    if (showField === false && eye) {
      eye.type = 'password'
      newStates[iconIndex] = false
    } else if (showField === true && eye) {
      eye.type = 'text'
      newStates[iconIndex] = true
    }
    setEyeStates(newStates)
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
          <div className={'w-1/2'}>
            <label className={'font-bold font block'}>Current Password</label>
            <div className="relative z-20 bg-white dark:bg-form-input mt-4">
              <input id='eye' onChange={(e) => {
                setCurrentPassword(e.target.value);
              }} value={currentPassword} type='password' required placeholder="Enter new password [6+ Characters]" className={'relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 pl-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'}/>
              <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"
                onClick={() => handleShowField('eye', 0)}
              >
                <FontAwesomeIcon id="eyeIcon" icon={eyeStates[0] ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
          
          <div className={'mt-5 w-1/2'}>
            <label className={'font-bold font block'}>New Password</label>
            <div className="relative z-20 bg-white dark:bg-form-input mt-4">
              <input id='eye2' onChange={(e) => {
                setPassword(e.target.value);
              }} value={password} type='password' required placeholder="Enter new password [6+ Characters]" className={'relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 pl-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'}/>
              <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"
                onClick={() => handleShowField('eye2', 1)}
              >
                <FontAwesomeIcon id="eyeIcon2" icon={eyeStates[1] ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
          <div className={'mt-5 w-1/2'}>
            <label className={'font-bold font block'}>Confirm New Password</label>
            <div className="relative z-20 bg-white dark:bg-form-input mt-4">
              <input id='eye3' onChange={(e) => {
                setConfirmPassword(e.target.value);
              }} value={confirmPassword} type='password' required placeholder="Enter new password [6+ Characters]" className={'relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 pl-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input'}/>
              <span className={'absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer'}
                onClick={() => handleShowField('eye3', 2)}
              >
                <FontAwesomeIcon id="eyeIcon3" icon={eyeStates[2] ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
          <div>
            <button type="submit" className={'bg-graydark mt-5 rounded px-5 py-2 rounded rounded-sm text-white font-semibold hover:outline hover:outline-graydark dark:outline-strokedark dark:outline dark:hover:text-white dark:hover:outline-white dark:outline-5 dark:bg-boxdark hover:outline-1 hover:bg-[#FFFFFF] hover:text-graydark'}>Change Password</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default ManagePasswordComponent;