import React from 'react';
import ChatGroup from '../../components/chatgroup';
import SideNav from '../../components/sidenav';
import Friends from '../friends';

function Chat({socket}) {

  return (
    <div className='bgc-gray-600 h-screen grid grid-cols-12'>
       <SideNav socket = {socket} />

        <div className=' col-span-10'>
            {/* <ChatGroup socket = {socket} /> */}
            <Friends />
        </div>
    </div>
  )
}

export default Chat;