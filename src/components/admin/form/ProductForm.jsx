import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./InputField";
import { useTranslation } from "react-i18next";

 



const ProductForm = ({ onSubmit }) => {
    const {t} = useTranslation()
    const productSchema = z.object({
        name: z.string().min(3, t('validation.required')),
        price: z.string().min(1, { message: t('validation.min') }),
      });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="اسم المنتج" register={register} name="name" errors={errors} />
      <InputField label="السعر" register={register} name="price" errors={errors} />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default ProductForm;
