import React, { useState } from 'react'
import { useApplyCouponMutation, useClearCartMutation, useDeleteCartMutation, useFetchCartsQuery, useUpdateCartMutation } from '../../store/api/cart'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Loading from '../../components/Loading'
import { useAppContext } from '../../context/AppContext'
import currency from "currency.js";
import { Divider } from 'antd'
import { LuLoaderCircle, LuTrash2 } from 'react-icons/lu'

    const formatPrice = (price) => {
      return currency(price, { symbol: "SAR ", precision: 0 }).format();
    };
function Cart() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [couponCode, setCouponCode] = useState("");
    const {isAuthenticated} = useAuth()
    const {language} = useAppContext()
    const {t} = useTranslation()
    const { data, isLoading ,isError,error,isFetching } = useFetchCartsQuery(undefined, {
        skip: !isAuthenticated,  
      });
      const [updateCart ,{}] = useUpdateCartMutation()
      const [deleteCart ,{}] = useDeleteCartMutation()
      const [clearCart ,{}] = useClearCartMutation()
      const [applyCoupon ,{isError:couponError,error:couponErrorText,isLoading:couponLoading}] = useApplyCouponMutation()
    const cartItems = data?.data.items
 
    

    const decrease = async (data)=>{
      if(data.quantity === 1) {
          await deleteCart(data.product._id,)
      }
      
      try{
      await  updateCart({ productId: data.product._id, quantity: data.quantity - 1 })
      }catch(err){
        console.error(err)
      }
    }

    const increase = async (data)=>{
      try{
        await updateCart({ productId: data.product._id, quantity: data.quantity + 1 })
      }catch(err){
        console.error(err)
      }
    }

  const removeItem = async(id)=>{
    try{
      await deleteCart(id.product._id)
    }catch(err){
      console.error(err)
    }
  }

  const handleClearCart = async()=>{
    try{
       await clearCart().unwrap()
    }catch(err){
      console.error(err)
    }
  }

  const applyCouponCode = async () => {
    if (!couponCode) return;
    try {
      await applyCoupon({ code: couponCode }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };



 
   if (cartItems?.length === 0) {
     return (
         <div className='flex flex-col items-center justify-center gap-4  min-h-[70vh]'>
             <h3>{t('cart.empty')}</h3>
             <Link to={'/'} className='bg-main text-white py-2 px-4 rounded-md'>{t('cart.continue-shopping')}</Link>
         </div>
     );
    
   }

    

    if (!isAuthenticated && !isFetching && !isLoading) {
      return (
          <div className='flex flex-col items-center justify-center gap-4 min-h-[70vh]'>
             <h3>{t('auth.auth')}</h3>
              <Link to={'/login'} className='bg-main text-white py-2 px-4 rounded-md'>{t('auth.login')}</Link>
          </div>
      );
  }
 
 
   
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
  <div className='container my-10 '>
   <div className='flex items-center justify-start gap-x-3'> <h2 className='title'>{t('cart.title')} </h2> - <h4> {t('cart.total-items')} ({cartItems?.length})</h4></div>
    {isLoading && <Loading />}
   
 <div className='flex flex-col md:flex-row  items-start justify-between w-full my-8 gap-10'>
  <div className='w-full md:w-[70%]  overflow-y-auto  max-h-[70vh] hidden-scrollbar'>
    <div className='flex flex-col gap-8 '>
        {cartItems?.map((el,index)=>(
          <div key={index} className='flex  flex-col md:flex-row items-start md:items-center gap-4 justify-between '>
            
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
              <button onClick={()=>decrease(el)} className='bg-red-400 cursor-pointer text-white h-8 w-8 flex items-center justify-center rounded-md'>-</button>
                <span>{el.quantity}</span>
              <button onClick={()=>increase(el)} className='bg-main cursor-pointer text-white h-8 w-8 flex items-center justify-center rounded-md'>+</button>
              </div>

            <div>
              <button onClick={()=>removeItem(el)} className='bg-gray-100 group transition-colors duration-200 hover:bg-gray-200 cursor-pointer text-gray-600 h-8 w-8 flex items-center justify-center rounded-md'><LuTrash2 className='group-hover:text-red-400'  /></button>
            </div>
            </div>
          </div>
        ))}
    </div>
  </div>


  {/* summary cart */}
  <div className=' w-full  md:w-[30%] sticky top-5 border border-gray-100 rounded-md p-3 '>
    <h2 className='text-xl text-gray-800'>{t('checkout.order-summary')}</h2>
 {couponError && <span className='text-red-500'>{couponErrorText?.data.message}</span>}
    <div className='flex items-center justify-start w-full my-3  border border-gray-200 rounded-md p-1'>
     
      <input type='text'
       placeholder={t('cart.coupon-text')}
       value={couponCode}
       onChange={(e) => setCouponCode(e.target.value)}
       className='  p-2 px-5 w-full outline-none' />
      <button
      onClick={applyCouponCode}
       className=' bg-main  rounded-md p-2.5 border px-5 text-white cursor-pointer  text-center' disabled={couponLoading}>
       {couponLoading ? <div>
         <LuLoaderCircle className='animate-spin text-2xl text-white' />
       </div> :  t('cart.apply')}
      
       </button>
    </div>

<div className='flex flex-col gap-4 my-8 '>
<div className='w-full flex items-center justify-between'>
      <h3 className='text-sm text-gray-800 '>{t('cart.subtotal')}</h3>
      <h3 className='text-sm text-gray-800'>{formatPrice(data?.data.totalPrice)}</h3>
    </div>

    <div className='w-full flex items-center justify-between'>
      <h3 className='text-sm text-gray-800'>{t('cart.discount')}</h3>
      <h3 className='text-sm text-gray-800'>{formatPrice(data?.data.discount)}</h3>
    </div>
    <Divider />
    <div className='w-full flex items-center justify-between font-bold '>
      <h3 className='text-md text-gray-800 '>{t('cart.total')}</h3>
      {data?.data.totalPriceAfterDiscount !== 0 ?  
      <h3 className='text-md text-gray-800'>{formatPrice(data?.data.totalPriceAfterDiscount)}</h3>
      :
      <h3 className='text-md text-gray-800'>{formatPrice(data?.data.totalPrice)}</h3>
       }

     
    </div>
    
</div>

<button className='cursor-pointer bg-main hover:bg-main/90 text-white font-bold text-sx w-full p-4 rounded-md'>{t('cart.checkout')}</button>
<button onClick={()=>handleClearCart()} className='cursor-pointer bg-gray-200 mt-3  text-gray-600 font-bold text-sx w-full p-4 rounded-md'>{t('cart.clear-cart')}</button>
  </div>
 </div>
     
    </div>
  </>
}

export default Cart