import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div className='bg-[#ffffff]'> 
      <header className='w-11/12 mx-auto bg-[#ffffff] '>
        <Navbar />
      </header>
      <div className='w-11/12 mx-auto'>
        <Outlet />
      </div>
      <div>]
        <Footer />
      </div>
    </div>
  )
}

export default Layout