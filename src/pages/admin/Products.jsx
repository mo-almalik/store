import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../../components/admin/Title'
import Btn from '../../components/admin/Btn'
import { LuCircleFadingPlus } from "react-icons/lu";

function Products() {
    const {t} = useTranslation()
  return <>
   <div  className='flex items-center justify-between'>
    <Title title={t('dash.products')} />
    <Btn text={t('dash.add_new')} type="outline"  icon={LuCircleFadingPlus} href={'add'} />

   </div>
  </>
}

export default Products