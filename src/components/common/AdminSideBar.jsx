import React from 'react'
import { useTranslation } from 'react-i18next'
import assets from '../../utils/assets'

function AdminSideBar() {
    const {t} = useTranslation()
  return (
    <div className='bg-white overflow-auto w-80 overflow-x-hidden flex flex-col items-center justify-between  '>
    <div className='w-full '>
    <div className='h-15 flex items-center  w-full px-4 gap-2'>
     <img src={assets.logo} alt='logo' className='w-8' />
     <h1 className='text-2xl font-bold text-main'>{t('common.name')}</h1>
    </div>
        <div className='mt-5'>
        <ul className='list-none px-4 '>
            <li><a href='#'>items</a></li>
        </ul>
        </div>
    </div>

        <div className='w-[96%] mb-2  flex items-center px-4'>
            <h3>
                log out
            </h3>
        </div>
    </div>
  )
}

export default AdminSideBar