import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import {  LuMoon, LuSettings, LuSunMoon} from "react-icons/lu";
function AdminHeader() {
  return (
    <div className='w-full bg-white h-15 flex items-center justify-between  px-10 sticky top-0'>
        <h2 className='text-xl'>Admin Panel</h2>
        <div className='flex items-center justify-end w-[20%] gap-2'>
        <div className='hover:bg-main/70 p-2 rounded-4xl hover:text-white transition-all duration-200 cursor-pointer'>
        <LuSettings size={20} />
        </div>
        <div className='hover:bg-main/70 p-2 rounded-4xl hover:text-white transition-all duration-200 cursor-pointer'>
        <LuMoon  size={20}/>
        </div>
       
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default AdminHeader