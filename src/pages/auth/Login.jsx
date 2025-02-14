import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../store/api/auth/authApi";
import { setCredentials } from "../../store/api/auth/authSlice";
import { toast } from "react-toastify";

const loginSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch()
  const [login,{isLoading,isError,error}] = useLoginMutation({})

  const onSubmit = async (data) => {
    try{
        const res = await login(data).unwrap()
        // console.log(res?.data);
        dispatch(setCredentials(res))
    }catch(err){
        // console.error(err) 
        toast.error(err.data?.message)
    }
   
     
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
      {isError && <span className="text-red-500">{error?.data?.message}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}

export default Login;
