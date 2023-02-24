import React from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function Main() {
  return (
    <div>Main</div>
  )
}

export default Main;