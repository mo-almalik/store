import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/common/TopNav'
import Navbar from '../components/common/Navbar'

function Layout() {
  return <>
    <div>
      <TopNav />
      <Navbar />
    </div>

    <Outlet />
  </>
}

export default Layout