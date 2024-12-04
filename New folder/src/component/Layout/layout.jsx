import React from 'react'
import NavBar from './nav-bar';
import Sidebar from './sidebar';

const Layout = ({ setAuth }) => {
  return (
    <>
    <div className='w-full h-full bg-gray-200'>
          <NavBar />
          <Sidebar /> 
      </div>
      </>
  )
};

export default Layout;
