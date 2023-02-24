import React, {useState} from 'react';


function Auth() {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setConfirmPassword] = useState();
  const [renderForm, setRenderForm] = useState('signup');
  const [formTitle, setFormTitle] = useState('Sign Up')

  const showSignUp = ()=>{
    setRenderForm('signup');
    setFormTitle('Sign Up');
  }

  const showSignIn = ()=>{
    setRenderForm('signin');
    setFormTitle('Sign In');
  }


 const handleSubmit = ()=>{
    console.log('submitted');
 }


  return (
    <div className='h-full main-signup-container flex justify-center align-center'>
       
        <div className=' right-pane flex justify-center items-center'>
            <div className='bg-white box rounded p-5'>
                <h2 className='text-2xl mb-4 font-semibold'>{formTitle}</h2>
                {/* <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when  
                </p> */}

                <div className='flex'>
                    <button className='p-2 hover:bg-gray-800 bg-gray-500 text-sm rounded-l' onClick = {showSignUp}>Sign Up </button>
                    <button className='p-2 hover:bg-gray-800 bg-gray-500 text-sm rounded-r' onClick={showSignIn}>Sign In</button>
                </div>

                {
                    renderForm == 'signup' &&  <div className='mt-4'>
                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Fullname:</label>
                            <input type = 'text' className='py-2 rounded bg-gray-500' onChange = { e=>setFullname(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Email:</label>
                            <input type = 'email' className='py-2 rounded bg-gray-500' onChange = { e=>setEmail(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Password:</label>
                            <input type = 'password' className='py-2 rounded bg-gray-500' onChange = { e=>setPassword(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className='text-xs mb-1'>Confirm Password:</label>
                            <input type = 'password' className='py-2 rounded bg-gray-500' onChange = { e=>setConfirmPassword(e.target.value)}/>
                        </div>

                        <div className='w-full my-2'>
                            <button className='bg-rose-600 hover:bg-rose-900 w-full py-3 rounded text-xs text-white' onClick = {handleSubmit}>Sign Up</button>
                        </div>     
                    
                </div>
                }
               

               {
                    renderForm == 'signin' &&  <div className='mt-4'>
                      

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Email:</label>
                            <input type = 'email' className='py-2 rounded bg-gray-500' onChange = { e=>setEmail(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className='text-xs mb-1'>Password:</label>
                            <input type = 'password' className='py-2 rounded bg-gray-500' onChange = { e=>setPassword(e.target.value)}/>
                        </div>


                        <div className='w-full my-2'>
                            <button className='bg-rose-600 hover:bg-rose-900 w-full py-3 rounded text-xs text-white' onClick = {handleSubmit}>Sign In</button>
                        </div>     
                    
                </div>
                }


            </div>
        </div>
    </div>
  )
}

export default Auth;