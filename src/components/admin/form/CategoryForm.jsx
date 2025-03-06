import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from './InputField';
import { useTranslation } from 'react-i18next';
import Btn from '../Btn';
import { useCreateCategoryMutation } from '../../../store/api/category';
import { Modal } from 'antd';
import { LuCircleFadingPlus } from "react-icons/lu";
import { toast } from 'react-toastify';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

function CategoryForm() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [createCategory,{isLoading,isError,error}] = useCreateCategoryMutation()
  const showModal = () => setIsModalOpen(true);
  const categorySchema = z.object({
    title: z.object({
      ar: z.string().min(3, t('validation.required')),
      en: z.string().min(3, t('validation.required'))
    }),
    image: z
      .instanceof(File, { message: t('validation.image') })
      .refine((file) => file.size <= MAX_FILE_SIZE, t('validation.max_size'))
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), t('validation.image_format')),
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(categorySchema) });

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];  
    if (file) {
      setValue("image", file); 
      setPreview(URL.createObjectURL(file));
      trigger("image");
    }
  };
    const handleOk = async (data) => {
      try {
        
        const formData = new FormData();
         
        formData.append("image", data.image);
      formData.append("title[ar]", data.title.ar);
      formData.append("title[en]", data.title.en);
       await createCategory(formData).unwrap()
      toast.success('Successfully created category')
      reset()
      setPreview(null)
      setValue(null)
        setIsModalOpen(false);
      } catch (error) {
       return false
      }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        reset()
        setPreview(null)
        setValue(null)
      }
  return (
    <>
       <Btn text={t('dash.add_new')} type="outline" onClick={showModal} icon={LuCircleFadingPlus} />
          <Modal title={t('dash.add-category')} footer={null} open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
    
           <form onSubmit={handleSubmit(handleOk)} className='flex flex-col gap-y-3'>
      {isError && <span className="text-red-500" >{error.data?.message}</span>}
      <InputField label={t('form.category_name') + ' AR'} register={register} name="title.ar" errors={errors} />
      <InputField label={t('form.category_name') + ' EN'} register={register} name="title.en" errors={errors} />
      
     
      <input 
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded border-gray-300 w-full"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}

      {preview && (
        <img src={preview} alt="Preview" className="w-40 h-40 object-cover mt-2" />
      )}

      <div className='flex gap-3'>
        <Btn type='primary' isload={isLoading} text={t('dash.add-category')} className='w-fit' subtype='submit' />
        <Btn type='outline' subtype='button' text={t('dash.cancel')} className='w-fit' onClick={handleCancel} />
      </div>
    </form> 
    </Modal>
    </>

  );
}

export default CategoryForm;
