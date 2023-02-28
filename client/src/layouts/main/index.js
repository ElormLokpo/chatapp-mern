import React from 'react';
import io from 'socket.io-client';
import Chat from '../../pages/chat';
import Auth from '../../pages/auth';

const socket = io.connect('http://localhost:5000');

function Main() {
  return (
    <>
      <Chat socket = {socket} />
    </>
  )
}

export default Main;