import React from 'react'
import { TbSearch } from 'react-icons/tb'

function Search({placeholder ="بحث"}) {
  return <>
    <form className='relative'>
        <input type='search' placeholder={placeholder} className='border border-[#E1E1E1] p-2 rounded-md outline-none w-full' />
        <TbSearch className=' absolute top-3  rtl:left-3  ltr:right-3' />
    </form>
  </>
}

export default Search