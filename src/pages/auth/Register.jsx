import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { userLogin } from "../../store/api/auth/authSlice";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from '../../store/api/auth/authApi';



const registerSchema = z.object({
    email: z.string().email("البريد الإلكتروني غير صالح"),
    password: z.string().min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل"),
    userName: z.string().min(3, "يجب أن يكون الاسم 3 أحرف على الأقل"),
    phone: z.string().min(10, "يجب أن يكون رقم الهاتف 10 أرقام على الأقل"),
    // terms: z.boolean().true("يجب الموافقة على الشروط والأحكام"),


  });
function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(registerSchema)
    });
    const {} = useAuth()
    const navigate = useNavigate()
    const [userRegister,{isLoading,isError,error}] = useUserRegisterMutation()
    const onSubmit = async (data) => {
        try {
           const res = await userRegister(data).unwrap()
           console.log(res);
           
            toast.success("تم التسجيل بنجاح")
            // navigate('/login')
        } catch (error) {
            toast.error(error.message)
        } finally {
            reset()
        }
    }
    console.log(error);
    
  return <>
 <div className="max-w-2xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4"> انشاء حساب  </h2>
      {isError && <span className="text-red-500">{error?.data?.message}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center flex-col md:flex-row'>
        <div className="mb-4">
          <label className="block text-sm font-medium">الاسم  </label>
          <input
            type="text"
            {...register("userName")}
            className="w-full p-2 border rounded"
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">رقم الجوال  </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">كلمة المرور</label>
          <input
            type="password"
            {...register("password")}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
        {isLoading ? "Loading..." : "تسحيل  "}
         
        </button>
      </form>
    </div>
  </>
}

export default Register