import React from 'react'
import { useGetProductQuery } from '../../store/api/product'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import currency from 'currency.js'

function ProductDetails() {
  const {t} = useTranslation()
  const {language} = useAppContext()
    const {slug} = useParams()
    const {data} = useGetProductQuery(slug)
    const product = data?.data
     const baseUrl = import.meta.env.VITE_BASE_URL;
   console.log(product);
   
     const formatPrice = (price) => {
       return currency(price, { symbol: "SAR ", precision: 0 }).format();
     };
    
  return <>
    <Helmet>
      <title>{data?.data?.title[language]}</title>
    </Helmet>
    <div className='bg-gray-200 py-4'>
      <div className='container text-sm text-gray-600  flex items-center gap-x-2'>
        <Link to={'/'} className='hover:text-black cursor-pointer'>{t('navbar.home')}</Link> 
        /  
        <span className='hover:text-black cursor-pointer'>{product?.category.title[language]}</span>
        /
        <span className='text-main'>{product?.title[language]}</span>
      </div>
    </div>
    <div className="container my-8">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className="md:col-span-1 ">
         
        <img className='w-full rounded-lg' src={`${baseUrl}/${product?.coverImage}`} alt={product?.title[language]} />
      </div>

        <div className="md:col-span-1">
          <h3 className="text-3xl text-gray-700 capitalize font-bold mb-8">{product?.title[language]}</h3>
         
          <p className='text-md text-gray-700'>{t('product.description')}: {product?.description[language]}</p>
        </div>
        
      </div>
    </div>
  </>
}

export default ProductDetails