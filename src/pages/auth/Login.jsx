import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLogin } from "../../store/api/auth/authSlice";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Role } from "../../utils/enum";

const loginSchema = z.object({
  email: z.string().email("البريد الإلكتروني غير صالح"),
  password: z.string().min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل"),
});

function Login() {
  const {isError,isLoading} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const dispath = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    try{
    const res= await dispath(userLogin(data));
   
    if (res?.meta?.requestStatus === "rejected") {
   return false
    }
    
    if(res.payload?.data.userRole === Role.ADMIN || res.payload?.data.userRole === Role.STAFF){
       toast.success("login success admin or staff")
       localStorage.setItem('logged_in',true)
       navigate('/dashboard')
    }else {
       toast.success("login success user")
       localStorage.setItem('logged_in',true)
      navigate('/')
    }

  }catch(e){
   
    return false
  }

  };
 
  

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
      {isError && <span className="text-red-500">{isError}</span>}
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
          disabled={isLoading}
        >
        {isLoading ? "Loading..." : " تسجيل الدخول"}
         
        </button>
      </form>
    </div>
  );
}

export default Login;
