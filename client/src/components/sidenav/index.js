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
                    
                    <div>
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' width={50} className='rounded-full'/>
                    </div>
                    
                    <div>
                        <p className='text-white text-lg font-semibold'>User One</p>
                        <p className='text-white text-sm font-light'>userone@gmail.com</p>
                    </div>
                    
                </div>
                
                <div className='mb-10'>
                    
                    <div className='mb-4'>
                        {/* <input type = 'text' className='w-100 py-2 px-1 rounded-l bgc-gray-500 text-sm' onChange = {e => setRoom(e.target.value)}/>
                        <button className='text-white text-sm bg-rose-600 px-5 rounded-r hover:bg-rose-800' onClick = {setRoomHandler}> +  </button>
                         */}

                        <div className='bgc-gray-500 p-4 mb-1 rounded inline-flex w-full gap-1 hover:cursor-pointer'>
                            <p><BsDot className='text-yellow-500'/></p>
                            <p className='text-xs'>Find Friends</p>
                        </div>    
                    </div>
                    <p className='mb-2'>Chats</p>

                   

                    {
                        [1,1,1,].map(()=><div className = ' mb-1 w-full gap-1 hover:cursor-pointer items-center gap-3 py-4'>
                            <div className='w-100 inline-flex gap-2 items-center'>
                                <div>
                                    {/* <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' width={30} className='rounded-full'/>
                                </div> */}

                                    <p><BsDot className='text-green-500'/></p>

                                </div>
                        
                                <div>
                                    <p className='text-xs'>Chat Room 1</p>
                                </div>

                            </div>
                            
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