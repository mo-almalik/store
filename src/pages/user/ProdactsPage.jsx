import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from '../../store/api/product';
import { useAppContext } from '../../context/AppContext';
import Products from '../../components/Products';
import { Link } from 'react-router-dom';
import { useAddCartMutation } from '../../store/api/cart';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/authContext';

function ProdactsPage() {
    const { t } = useTranslation();
      const { data, isLoading, isError, error } = useGetProductsQuery({});
      const { language } = useAppContext();
      const [addCart ] = useAddCartMutation({})
       const {isAuthenticated} = useAuth()
  const addToCart = async (productId,quantity=1) => {

    try {
       if(!isAuthenticated) {
        toast.error(t('auth.login'))
        return
       }
      await addCart({ productId ,quantity});
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
  }
  return <>
          <div className="container my-8">
        <div className='flex justify-between items-center mb-4'>
        <h3 className="title mb-4">{t("product.title")}</h3>
        <Link to={'/products'} className='text-main/80 capitalize text-sm'>{t('product.all')}</Link>
        </div>
          <Products
            isError={isError}
            error={error}
            isLoading={isLoading}
            language={language}
            data={data?.data?.products}
            limit={8}
            addToCart={addToCart}
             />
          </div>
  </>
}

export default ProdactsPage