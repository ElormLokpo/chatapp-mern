import React,{useEffect, useState} from 'react';
import { BsDot } from 'react-icons/bs';

function SideNav({socket}) {
    const [room, setRoom] = useState();

    
    const setRoomHandler = ()=>{
        // socket.emit('join-room', room);
        // console.log('emmitted');
    }

    useEffect(()=>{
        socket.emit('join-room',room);
    },[])
  return (
    <>  
         <div className='bgc-gray-700 col-span-2 p-4 side-nav'>
            <div className='side-nav-content'>
                <div className='mb-5'>
                    <p className='text-white text-lg font-semibold'>User One</p>
                    <p className='text-white text-sm font-light'>userone@gmail.com</p>

                </div>
                
                <div className='mb-10'>
                    <p className='mb-2'>Rooms</p>

                    <div className='inline-flex mb-4'>
                        <input type = 'text' className='w-100 py-2 px-1 rounded-l bgc-gray-500 text-sm' onChange = {e => setRoom(e.target.value)}/>
                        <button className='text-white text-sm bg-rose-600 px-5 rounded-r hover:bg-rose-800' onClick = {setRoomHandler}> +  </button>
                        
                    </div>

                    {
                        [1,1,1,].map(()=><div className='bgc-gray-500 p-4 mb-1 rounded inline-flex w-full gap-1 hover:cursor-pointer'>
                            <p><BsDot className='text-green-500'/></p>
                            <p className='text-xs'>Chat Room 1</p>
                        </div>    
                        )
                    }
                </div>

                <div className=''>
                    <p className='mb-2'>Chats</p>

                    {
                        [1,1,1,1,1].map(()=><div className='bgc-gray-500 p-4 mb-1 rounded inline-flex w-full gap-1 hover:cursor-pointer'>
                            <p><BsDot className='text-yellow-500'/></p>
                            <p className='text-xs'>Chat Room 1</p>
                        </div>    
                        )
                    }
                </div>
            </div>


        </div>
    </>
  )
}

export default SideNav;