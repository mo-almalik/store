import React from 'react'
import { useTranslation } from 'react-i18next';
import { useGetProductsQuery } from '../../store/api/product';
import { useAppContext } from '../../context/AppContext';
import Products from '../../components/Products';

function ProdactsPage() {
    const { t } = useTranslation();
      const { data, isLoading, isError, error } = useGetProductsQuery({});
      const { language } = useAppContext();
  return <>
          <div className="container my-8">
          <h3 className="title mb-4">{t("product.title")}</h3>

          <Products
           isError={isError}
            error={error}
            isLoading={isLoading}
            language={language}
            data={data?.data?.products}
             />
          </div>
  </>
}

export default ProdactsPage