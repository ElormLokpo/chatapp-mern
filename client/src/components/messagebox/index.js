import React, {useState} from 'react';
import { MdSend } from 'react-icons/md';


function MessageBox() {
  const [message, setMessage] = useState();

  const setMessageHandler = ()=>{
    let msgData = {
      author: 'User one',
      message,
      time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    };
    console.log('Message data', msgData);
  }

  return (
    <>
        <div className=' inline-flex message-box-container w-full px-10 py-5'>
            <input type = 'text' className='message-box w-full py-2 rounded-l bgc-gray-500 text-white text-sm' onChange = {e=> setMessage(e.target.value)}/> <p>Refactor one</p>
            <button className='text-white text-sm bg-rose-600 px-5 rounded-r hover:bg-rose-800' onClick = {setMessageHandler}><MdSend /> </button>
        </div>
    </>
  )
}

export default MessageBox