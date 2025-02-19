import React from 'react'
import { useFetchCartsQuery } from '../../store/api/cart'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Loading from '../../components/Loading'
import { useAppContext } from '../../context/AppContext'
import currency from "currency.js";

function Cart() {
    const formatPrice = (price) => {
      return currency(price, { symbol: "SAR ", precision: 0 }).format();
    };
  const baseUrl = import.meta.env.VITE_BASE_URL;

    const {isAuthenticated} = useAuth()
    const {language} = useAppContext()
    const {t} = useTranslation()
    const { data, isLoading ,isError,error,isFetching } = useFetchCartsQuery(undefined, {
        skip: !isAuthenticated,  
      });
    const cartItems = data?.data.items
    

    if (!isAuthenticated && !isFetching && !isLoading) {
      return (
          <div className='flex flex-col items-center justify-center gap-4 min-h-[70vh]'>
             <h3>{t('auth.auth')}</h3>
              <Link to={'/login'} className='bg-main text-white py-2 px-4 rounded-md'>{t('auth.login')}</Link>
          </div>
      );
  }
 console.log(data?.data);
 
   
   if(isError && error.status === 404 ) {
    return <div className='flex flex-col items-center justify-center gap-4  min-h-[70vh]'>
            <h3>{t('cart.empty')}</h3>
            <Link to={'/'} className='bg-main text-white py-2 px-4 rounded-md'>{t('cart.continue-shopping')}</Link>
        </div>
   }
    
  return <>
  <Helmet>
    <title>{t('cart.title')}</title>
  </Helmet>
  <div className='container my-10'>
   <div className='flex items-center justify-start gap-x-3'> <h2 className='title'>{t('cart.title')} </h2> - <h4> {t('cart.total-items')} ({cartItems?.length})</h4></div>
    {isLoading && <Loading />}
   
 <div className='flex flex-col md:flex-row  items-start justify-between w-full my-8 gap-5'>
  <div className='w-full md:w-[70%] '>
    <div className='flex flex-col gap-8'>
        {cartItems?.map((el,index)=>(
          <div key={index} className='flex  flex-col md:flex-row items-start md:items-center gap-4 justify-between'>
            
            <div className='flex items-start gap-5'>
            <img src={`${baseUrl}/${el.product.coverImage}`} alt={el.product.title} className='w-28 h-28 object-cover rounded-md' />
            <div className='flex flex-col gap-y-5 mt-2'>
            <h3 className='text-md'>{el.product.title[language]}</h3>
            {/*   {formatPrice(el.price)} */}
            <p className='text-md text-main font-bold'>{formatPrice(el.product.price)}</p>
            </div>
            </div>
            {/* quantity */}
            <div className='flex items-center gap-x-5 '>
            <div className='flex items-center gap-3'>
            <span>{t('cart.quantity')}</span>
              <button onClick={()=>console.log('decrease')} className='bg-gray-400 cursor-pointer text-white h-8 w-8 flex items-center justify-center rounded-md'>-</button>
                <span>{el.quantity}</span>
              <button onClick={()=>console.log('increase')} className='bg-main cursor-pointer text-white h-8 w-8 flex items-center justify-center rounded-md'>+</button>
              </div>

            <div>
              <button onClick={()=>console.log('remove')} className='bg-gray-100 cursor-pointer text-gray-600 h-8 px-5 rounded-md'>{t('cart.remove')}</button>
            </div>
            </div>
          </div>
        ))}
    </div>
  </div>


  {/* sumary cart */}
  <div className=' w-full  md:w-[30%] border border-gray-100 rounded-md p-3'>
    <h2>{t('checkout.order-summary')}</h2>
  </div>
 </div>
     
    </div>
  </>
}

export default Cart