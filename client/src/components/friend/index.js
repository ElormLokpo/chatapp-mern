import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import axios from '../../services/axios';
import {useSelector} from 'react-redux';



function Friend({details}) {

  const current_user = useSelector(state=> state.loginS.value.userDetails);
  
  const handleAddFriend = ()=>{
      console.log(current_user.id, details._id);
      axios.post('/friends/addfriend',{userid: current_user.id, friendid: details._id})
      .then((res)=>{
        console.log(res.data);
      })
  }

  return (
    <>
     <div className='bgc-gray-500 mb-1 px-3 py-5 rounded inline-flex w-full justify-between items-center'>
        <div className='inline-flex gap-3'>
            <div>
                {/* <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' width={50} className='rounded-full'/>
            </div> */}

              <p><BsDot className='text-green-500'/></p>


            </div>

            <div>
                <p className='mb-2'>{details.username}</p>
                <p className='text-xs font-light'>{details.email}</p>
            </div>
        </div>
    
        <div className='flex align-center hover:cursor-pointer' onClick = {handleAddFriend}>
            <p> <AiOutlineUserAdd /> </p>
        </div>
     </div>
    </>
   
  )
}

export default Friend