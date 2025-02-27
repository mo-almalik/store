import React from 'react'

function AdminSideBar() {
  return (
    <div className='bg-gray-100 overflow-auto w-80 overflow-x-hidden flex flex-col items-center justify-between  '>
    <div className='w-full '>
    <div className='py-4 bg-white w-full px-4'>
    Dashboard
    </div>
        <ul className='list-none px-4'>
            <li><a href='#'>items</a></li>
        </ul>
    </div>

        <div className='bg-main w-[96%] mb-2 flex items-center justify-center text-white rounded-lg h-10'>
            <h3>
                username
            </h3>
        </div>
    </div>
  )
}

export default AdminSideBar