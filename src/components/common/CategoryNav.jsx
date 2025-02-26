import React from 'react'
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';
import { useGetCategoriesQuery } from '../../store/api/category';
import { Link } from 'react-router-dom';



function CategoryNav() {
    const {t} = useTranslation()
        const { language } = useAppContext();
        const { data, isLoading, isError, error } = useGetCategoriesQuery({});
        
  return <>
   <div className='bg-main py-2 overflow-x-scroll lg:overflow-auto '>
   <div className='flex gap-x-3 container'>
    {data?.data?.categories.map((category) => (
      <li key={category._id} className='list-none flex items-center'>
        <Link to={`/category/${category.slug}`} className='hover:bg-gray-200/10 text-white text-nowrap rounded-full px-3 p-2 transition-all duration-200'>{t(category.title[language])}</Link>
      </li>
    ))}
    </div>
   </div>
  </>
}

export default CategoryNav