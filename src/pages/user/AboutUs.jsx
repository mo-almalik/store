import React from 'react'
import { useTranslation } from 'react-i18next'
import assets from '../../utils/assets'
import { LuCircleCheck, LuRocket, LuShieldCheck, LuStar } from "react-icons/lu";

function AboutUs() {
    const {t} = useTranslation()
  return <>
    <div className='container mb-10 mt-24 '>
    

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
    <div className="md:col-span-1 lg:col-span-1 xl:col-span-2  flex items-center ">
<div>
<h3 className="text-3xl text-black mb-4 capitalize font-bold">{t("about.title")}</h3>
    <p className='text-gray-600 w-[80%]'>
      {t('about.about-text')}
    </p>
    <div className='mt-6'>
      <ul className='flex flex-col gap-y-4 text-gray-600'>
        <li className='flex items-center gap-x-1.5'><LuCircleCheck className='text-main'/> <span>{t('about.one')}</span></li>
        <li className='flex items-center gap-x-1.5'><LuCircleCheck className='text-main'/>{t('about.two')}</li>
        <li className='flex items-center gap-x-1.5'><LuCircleCheck className='text-main'/>{t('about.three')}</li>
        <li className='flex items-center gap-x-1.5'><LuCircleCheck className='text-main'/>{t('about.four')}</li>
      </ul>
    </div>
    <button className='bg-main p-3 mt-5 text-white rounded-md px-4 cursor-pointer hover:shadow-2xl transition-colors duration-300'>
      {t('about.more')}
    </button>

</div>
    </div>
    <div className="relative mt-10 md:mt-0">
        <img src={assets.about} alt='about us' className=' rounded-t-full w-full md:w-[90%]' />
        <div className='bg-light shadow-2xl p-5 rounded-lg absolute w-full bottom-1 left-5  md:-left-10 md:rtl:-right-10  transition-all duration-1000 '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-1.5'><LuStar className='text-main size-6' /> <strong>{t('about.quality')}</strong></div>
                <div className='flex items-center gap-x-1.5'><LuShieldCheck className='text-main size-6' /> <strong>{t('about.security')}</strong></div>
                <div className='flex items-center gap-x-1.5'><LuRocket className='text-main size-6' /><strong>{t('about.speed')}</strong></div>
            </div>
        </div>
    </div>
    </div>
    </div>
  </>
}

export default AboutUs