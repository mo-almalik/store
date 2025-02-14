import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useGetCategoriesQuery } from '../../store/api/category';
import { useTranslation } from 'react-i18next';

function Category() {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const {t} = useTranslation()
    
    const { language } = useAppContext();
    const { data, isLoading, isError, error } = useGetCategoriesQuery({});

  
    if (isLoading) {
        return <div>Loading...</div>;
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
        <div key={index} className=' rounded-md'>
            {/* <div>
                <img src={imageUrl} alt={el.title[language]}  className='rounded-md h-[250px]' />
            </div> */}
            <div className='border border-gray-200 p-2 rounded-4xl px-4 hover:bg-main/10 transition-colors duration-100 hover:border-main/10 cursor-pointer'>
                <h3>{el.title[language]}</h3>
            </div>
        </div>
    );
})}
        </div>

        </div>
    </>
}

export default Category;