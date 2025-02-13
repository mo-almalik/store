import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/common/TopNav'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function Layout() {
  return <>
    <div  className='pb-20 md:pb-0'>
      <TopNav />
      <Navbar />
    

    <Outlet />
    <Footer />
    </div>
  </>
}

export default Layout