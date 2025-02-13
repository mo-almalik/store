import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from '../../store/api/product';
import { useAppContext } from '../../context/AppContext';
import Products from '../../components/Products';
import { Link } from 'react-router-dom';

function ProdactsPage() {
    const { t } = useTranslation();
      const { data, isLoading, isError, error } = useGetProductsQuery({});
      const { language } = useAppContext();
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
             />
          </div>
  </>
}

export default ProdactsPage