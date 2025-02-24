import React from 'react'
import { useGetProductQuery } from '../../store/api/product'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../context/AppContext'
import currency from 'currency.js'
import { LuShoppingBag } from 'react-icons/lu'
import { useAddCartMutation } from '../../store/api/cart'
import { useAuth } from '../../context/authContext'
import { toast } from 'react-toastify'

     const formatPrice = (price) => {
       return currency(price, { symbol: "SAR ", precision: 0 }).format();
     }

     const baseUrl = import.meta.env.VITE_BASE_URL;

function ProductDetails() {
  const {t} = useTranslation()
  const {language} = useAppContext()
    const {slug} = useParams()
    const {data} = useGetProductQuery(slug)
    const product = data?.data
 
         const [addCart ] = useAddCartMutation({})
         
          const {isAuthenticated} = useAuth()
      
          const addToCart = async (productId,quantity=1) => {
   
       try {
          if(!isAuthenticated) {
           toast.error(t('auth.login'))
           return
          }
        await addCart({ productId ,quantity}).unwrap();
         toast.success(t('notifications.added-to-cart'))
       } catch (error) {
   
         toast.error(t('notifications.error'))
       }
     }
;
    
  return <>
    <Helmet>
      <title>{data?.data?.title[language]}</title>
    </Helmet>
    <div className='bg-gray-200 py-4'>
      <div className='container text-sm text-gray-600  flex items-center gap-x-2 truncate'>
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
          <div className='flex flex-col gap-y-5 justify-around h-full'>
            <div>
            <h3 className="text-3xl text-gray-700 capitalize font-bold mb-8">{product?.title[language]}</h3>
             <div>
               <p className='text-md text-gray-700 line-clamp-2'>{t('product.description')}: {product?.description[language]}</p> <Link className='text-main'>اقرء المزيد</Link>
             </div>
            </div>

            <div className='border border-gray-200 w-full md:w-fit  p-4 rounded-lg flex flex-col md:flex-row gap-y-5 items-center justify-between'>
          
          <p className='text-md text-back font-bold'>{formatPrice(product?.price)}</p>
          <button onClick={()=>addToCart(product._id)} className='bg-main cursor-pointer mr-8 p-3 rounded-lg text-white flex items-center gap-3'>
          {t('cart.add-cart')} 
           <LuShoppingBag size={20} />
          </button>
         </div>

          </div>
        
       
        </div>
       
      </div>
    </div>
  </>
}

export default ProductDetails