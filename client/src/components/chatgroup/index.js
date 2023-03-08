import React from 'react';
import TopNav from '../topnav';
import Chats from '../chats';
import MessageBox from '../messagebox';

function ChatGroup({socket}) {
  return (
    <>
          <TopNav />
           <Chats socket = {socket} />

           <MessageBox socket = {socket} />
    </>
  )
}

export default ChatGroup