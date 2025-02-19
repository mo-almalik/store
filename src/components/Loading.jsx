import React from 'react'
import { useTranslation } from 'react-i18next'
import { LuLoaderCircle } from "react-icons/lu";

function Loading() {
    const {t} = useTranslation()
  return <>
  <div className='min-h-screen flex justify-center items-center'>
     <LuLoaderCircle className='animate-spin text-2xl text-main' />
    {/* <p className='text-center text-sm text-main'>{t('common.loading')}</p> */}
  </div>

  </>
}

export default Loading