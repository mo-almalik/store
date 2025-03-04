import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import {  LuMenu, LuMoon, LuSettings, LuSunMoon} from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/navbarSlice';
function AdminHeader() {
  const dispatch = useDispatch()
  const {isMenuOpen} = useSelector((state)=>state.navbar)
  const handleMenu = ()=>{
    dispatch(toggleMenu())
  }
 
  
  return (
    <div className='w-full bg-white h-15 flex items-center justify-between  px-10 sticky top-0'>
       <div>
         <button onClick={()=>handleMenu()} className='hover:bg-main/70 p-2 rounded-4xl hover:text-white transition-all duration-200 cursor-pointer'>
            <LuMenu size={20} />
         </button>
       </div>

        <div className='flex items-center justify-end w-full md:w-[20%] gap-2'>
        <div className='hover:bg-main/70 p-2 rounded-4xl hover:text-white transition-all duration-200 cursor-pointer'>
        <LuSettings size={20} />
        </div>
        <div className='hover:bg-main/70 p-2 rounded-4xl hover:text-white transition-all duration-200 cursor-pointer'>
        <LuMoon  size={20}/>
        </div>
       
      <div>
      <LanguageSwitcher />
      </div>
      </div>
    </div>
  )
}

export default AdminHeader