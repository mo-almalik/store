import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return <>
  <div className='bg-[#F5F7FA] min-h-screen'>
    <Outlet />
  </div>
  </>
}

export default AdminLayout