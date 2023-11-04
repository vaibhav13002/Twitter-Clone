import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

const Profile = () => {
    const navigate=useNavigate();

    const handleBack=()=>navigate(-1);
  return (
    <div>
        <section className={' z-50 flex items-center sicky top-0 bg-opacity-95'}>
         <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack}/>
         <h1 className='py-5 text-xl font-bold opacity-90'>Code with Vaibhav</h1>
        </section>
        <section>
          <img className='w-[100%] h-[15rem] object-cover' src ="https://cdn.pixabay.com/photo/2023/08/23/13/09/dolomites-8208541_1280.jpg" alt="" />
        </section>
        <section>
          <div className='flex justify-between items-start mt-5 h-[5rem]'>
            <Avatar alt='code with vaibhav' src='https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/78-256.png'
            sx={{width:"10rem", height:"10rem",border:"4px solid white"}}/>
          </div>
        </section>
    </div>
  )
}

export default Profile