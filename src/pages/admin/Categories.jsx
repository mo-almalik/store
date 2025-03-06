import React, { useState } from 'react';
import Title from '../../components/admin/Title';
import { useTranslation } from 'react-i18next';
import CategoryForm from '../../components/admin/form/CategoryForm';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../store/api/category';
import { Image, Table } from 'antd';
import { useAppContext } from '../../context/AppContext';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import Btn from '../../components/admin/Btn';
import { record } from 'zod';
import { LuFileDiff, LuPencilLine, LuTrash2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';


function Categories() {

  const { t } = useTranslation();
  const {language} = useAppContext()

const {data,isLoading} = useGetCategoriesQuery({})
const [deleteCategory] = useDeleteCategoryMutation()
const handleDelete = async (slug)=>{
  console.log(slug);
  
try {
  await deleteCategory(slug).unwrap()
  toast.success(t('notifications.delete_message'))
} catch (error) {


    toast.error(t('notifications.error'))
}

}

const columns =[
  {
    title: "#",
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: t('common.image'),
    dataIndex: 'image',
    key: 'image',
    width: 80,
  },
  {
    title: t('form.category_name'),
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: t('common.created_at'),
    dataIndex: 'createdAt',
    key: 'createdAt',
  },

  {
    title: t('common.actions'),
    key: 'actions',
    dataIndex: 'actions',
    width: 150,
  
  },
]
const baseUrl = import.meta.env.VITE_BASE_URL;
const dataSource = data?.data.categories.map((el,index)=>{
  return {
    key: el._id,
    id: index +1,
    image: <Image loading='lazy'    src={`${baseUrl}/${el.image}`} className='rounded-lg ' width={'50px'} alt={el.title[language]}   />,
    title: el.title[language],
    createdAt: dayjs(el.createdAt).format('MM/DD/YYYY'),
    actions :<div className='flex items-center gap-2'>
      <Link   to={`/admin/categories/${el._id}/edit`} >  <LuPencilLine className='text-gray-500'/></Link>
      <span className='ant-divider' />
      <button onClick={() => handleDelete(el.slug)} className='hover:text-red-500 cursor-pointer transition-all duration-300' >
         <LuTrash2  />
      </button>
     
    </div>
  } 
})
  return (
    <>
      <div className='flex items-center justify-between'>
        <Title title={t('dash.categories')} />
        <CategoryForm />
      </div>
   <div >
    {isLoading && <div>Loading...</div>}
    <Table
    columns={columns}
    dataSource={dataSource}
     />
    {!isLoading && data && data?.data.categories.length === 0 && <p>{t('dash.no_categories')}</p>}
   </div>
    
       
    </>
  );
}

export default Categories;
