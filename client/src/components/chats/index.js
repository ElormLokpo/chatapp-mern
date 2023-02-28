import React from 'react'

function Chats() {
  return (
    <>
        <div className='mx-10 my-20'>
            {
                [].map(()=><div>
                    <div className='main-usr-msg'>
                        <div className='bg-rose-600 p-2 w-fit rounded mb-2'>
                            <p className='pb-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                            
                            <div className='text-xs inline-flex gap-2'>
                                <p>4:44pm</p> <p className='font-bold'>You</p>
                            </div>
                        </div>
                    </div>
                
                <div className='other-usr-msg'>
                    <div className='bgc-gray-300 p-2 w-fit rounded mb-2'>
                        <p className='pb-1'>Lorem Ipsum is simply dummy text of the printing and typesetting p</p>
                            
                        <div className='text-xs inline-flex gap-2'>
                            <p>4:44pm</p> 
                        </div>
                    </div>
                    </div>


                </div>)
            }
            
        
        </div>    
    </>
  )
}

export default Chats