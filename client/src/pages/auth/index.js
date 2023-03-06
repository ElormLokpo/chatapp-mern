import React, {useEffect, useState} from 'react';
import axios from '../../services/axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {storeToken, storeUsrData} from '../../services/redux/slices/authSlice'

function Auth() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pin, setPin] = useState();
  const [confirmpass, setConfirmPin] = useState();
  const [renderForm, setRenderForm] = useState('signup');
  const [formTitle, setFormTitle] = useState('Sign Up')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showSignUp = ()=>{
    setRenderForm('signup');
    setFormTitle('Sign Up');
  }

  const showSignIn = ()=>{
    setRenderForm('signin');
    setFormTitle('Sign In');
  }


 const handleSignUpSubmit = ()=>{
    axios.post('/auth/register',{
        username,email,pin
    }).then(res=>{
        
        if(res.data.token || res.data.usrData){
            dispatch(storeToken(res.data.token));
            dispatch(storeUsrData(res.data.usrdata));
        }

    })
 }

 const handleSignInSubmit = ()=>{
    axios.post('/auth/login',{
       email,pin
    }).then(res=>{
        console.log(res.data);

        if(res.data.token || res.data.usrData){
            dispatch(storeToken(res.data.token));
            dispatch(storeUsrData(res.data.usrdata));
        }

    })
 }

  let if_token =  useSelector(state=>state.loginS.value.token);

  useEffect(()=>{
    if(if_token){
        navigate('/chat');
    }

  },[if_token])

  return (
    <div className='h-full flex justify-center align-center'>
       
        <div className=' right-pane flex justify-center items-center'>
            <div className='box bgc-gray-700 rounded p-5'>
                <h2 className='text-2xl mb-4 font-semibold'>{formTitle}</h2>
                {/* <p className='text-sm font-light'>It is a long established fact that a reader will be distracted by 
                    the readable content of a page when  
                </p> */}

                <div className='flex'>
                    <button className='p-2 hover:bg-gray-600 bgc-gray-500 text-sm rounded-l' onClick = {showSignUp}>Sign Up </button>
                    <button className='p-2 hover:bg-gray-600 bgc-gray-500 text-sm rounded-r' onClick={showSignIn}>Sign In</button>
                </div>

                {
                    renderForm == 'signup' &&  <div className='mt-4'>
                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Username:</label>
                            <input type = 'text' className='py-2 rounded bgc-gray-500' onChange = { e=>setUsername(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Email:</label>
                            <input type = 'email' className='py-2 rounded bgc-gray-500' onChange = { e=>setEmail(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Pin:</label>
                            <input type = 'password' className='py-2 rounded bgc-gray-500' onChange = { e=>setPin(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className='text-xs mb-1'>Confirm Pin:</label>
                            <input type = 'password' className='py-2 rounded bgc-gray-500' onChange = { e=>setConfirmPin(e.target.value)}/>
                        </div>

                        <div className='w-full my-2'>
                            <button className='bg-rose-600 hover:bg-rose-900 w-full py-3 rounded text-xs text-white' onClick = {handleSignUpSubmit}>Sign Up</button>
                        </div>     
                    
                </div>
                }
               

               {
                    renderForm == 'signin' &&  <div className='mt-4'>
                      

                        <div className='flex flex-col mb-3'>
                            <label className='text-xs mb-1'>Email:</label>
                            <input type = 'email' className='py-2 rounded bgc-gray-500' onChange = { e=>setEmail(e.target.value)}/>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label className='text-xs mb-1'>Pin:</label>
                            <input type = 'password' className='py-2 rounded bgc-gray-500' onChange = { e=>setPin(e.target.value)}/>
                        </div>


                        <div className='w-full my-2'>
                            <button className='bg-rose-600 hover:bg-rose-900 w-full py-3 rounded text-xs text-white' onClick = {handleSignInSubmit}>Sign In</button>
                        </div>     
                    
                </div>
                }


            </div>
        </div>
    </div>
  )
}

export default Auth;