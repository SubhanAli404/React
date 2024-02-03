import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function Layout() {
  return (
    <div className=''>
    <Header />
    {/* <hr className=' w-full absolute    left-0' /> */}
    <div className=' bg-[#f8f9fa]'><div className='px-60'><Outlet  /></div></div>
     <Footer />
    </div>
  )
}

export default Layout