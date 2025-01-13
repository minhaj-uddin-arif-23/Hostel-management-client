import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Layout() {
  return (
    <div className='bg-[#FAEBEFFF]'> 
      <header className='w-11/12 mx-auto bg-[#FAEBEFFF] '>
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout