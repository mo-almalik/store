import React from 'react'
import { useTranslation } from 'react-i18next'
import { LuRocket } from 'react-icons/lu'

function CTA() {
    const {t} = useTranslation()
  return <>
    <div className='bg-main mt-10 md:mt-20 text-white py-10 relative overflow-hidden'>
    <div className='absolute h-full rounded-full rtl:left-0 ltr:right-0 ltr:  opacity-10 top-0 z-10'>
        <LuRocket className='text-back ' size={200} />
    </div>
        <div className='container flex flex-wrap gap-5 items-center justify-between py-10 z-50'>
           <div className='w-full md:w-[60%]'>
           <h2 className='text-2xl md:text-3xl w-full leading-10'>{t('cta.title')}</h2>
           {/* <p className='w-full md:w-[70%] mt-4'>{t('cta.text')}</p> */}
           </div>
           <div>
            <button className='border  py-2 px-4 rounded-md hover:bg-white hover:text-main transition-all duration-200 cursor-pointer font-semibold '>{t('cta.btn')}</button>
           </div>
        </div>
    </div>
  </>
}

export default CTA