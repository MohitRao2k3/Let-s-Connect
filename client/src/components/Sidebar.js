import React from 'react';
import Navbar from '../components/Navbar.js';
import Search from '../components/Search.js';
import Chats from '../components/Chats.js';

const Sidebar=()=>{
  return(
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar;