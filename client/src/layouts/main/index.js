import React from 'react';
import Chat from '../../pages/chat';
import Auth from '../../pages/auth';
import io from 'socket.io-client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChatGroup from '../../components/chatgroup';
import Friends from '../../pages/friends';


const socket = io.connect('http://localhost:5000');

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/signin' element = {<Auth />} />
        <Route path = '/chat' element = { <Chat socket = {socket} />} />
           
      </Routes>

     
    </BrowserRouter>
  )
}

export default Main;