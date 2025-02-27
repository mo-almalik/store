import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useGetCategoriesQuery } from '../../store/api/category';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {Skeleton} from "antd"

function Category() {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const {t} = useTranslation()
    
    const { language } = useAppContext();
    const { data, isLoading, isError, error } = useGetCategoriesQuery({});

  
    if (isLoading) {
        return  [...Array(5)].map((_, index) => (
            <div key={index} className='border border-gray-200 py-1 px-3 rounded-4xl flex items-center gap-x-3 w-40'>
                <Skeleton.Avatar active size={48} shape="circle" />
                <Skeleton.Input active size="small" style={{ width: 80 }} />
            </div>
        ))
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }


    return <>
    <div className='container my-8'>
        <h3 className='title mb-4'>{t('category.all')}</h3>

         <div className='flex flex-wrap items-center gap-2 md:gap-5'>
{data.data?.categories?.map((el, index) => {
    const imageUrl = `${baseUrl}/${el.image}`;


    return (
        <div key={index} className=' border border-gray-200 rtl:pl-3  rtl:pr-1 ltr:pr-3  py-1 ltr:pl-1  rounded-4xl hover:bg-main/10 transition-colors duration-100 hover:border-main/10 cursor-pointer'>
           
            <Link to={`/category/${el.slug}`}>
            <div className=' flex items-center justify-center gap-x-3'>
            <div>
       <img  src={imageUrl}  className='rounded-full w-12 h-12 object-center' />
       </div>
                <h3>{el.title[language]}</h3>
            </div>
            </Link>
        </div>
    );
})}
        </div>

        </div>
    </>
}

export default Category;