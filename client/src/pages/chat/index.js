import React from 'react';
import Chats from '../../components/chats';
import MessageBox from '../../components/messagebox';
import SideNav from '../../components/sidenav';
import TopNav from '../../components/topnav';





function Chat({socket}) {

  return (
    <div className='bgc-gray-600 h-screen grid grid-cols-12'>
       <SideNav socket = {socket} />

        <div className=' col-span-10'>
           <TopNav />
           <Chats socket = {socket} />

           <MessageBox socket = {socket} />
        </div>
    </div>
  )
}

export default Chat;