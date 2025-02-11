import React from 'react'
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
function TopNav() {
  const {t} = useTranslation()
  return (
    <div className='w-full bg-black py-4'>
    <div className='container text-white flex flex-wrap gap-3  items-center justify-between'>
      <div className='flex items-center justify-center gap-2'>
      {/* emial */}
        <div className='flex items-center gap-2 ltr:flex-row-reverse '>
          <span className='text-sm'>info@smartzone.com</span>
          <span><TbMail  /></span>
        </div>
        {/* phone */}
        <div className='flex items-center gap-2 ltr:flex-row-reverse'>
          <span  className='text-sm'>002490000000</span>
          <span><TbPhone /></span>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
       <div className='flex items-center gap-2'> 
       <span><TbUser /></span>
       <Link to={'/'}>{t('common.login')}</Link>
       </div>
       <div>
        <LanguageSwitcher />
       </div>
      </div>
    </div>
    </div>
  )
}

export default TopNav