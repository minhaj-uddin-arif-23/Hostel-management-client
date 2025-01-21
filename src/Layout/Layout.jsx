import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div className='w-full bg-[#ffffff]'> 
      <header className='w-full mx-auto bg-[#fef7f7] z-50  top-0 fixed'>
        <Navbar />
      </header>
      <div className='w-11/12 mx-auto mt-28'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout