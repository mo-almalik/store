import React from "react";
import { TbMail, TbPhone, TbUser } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom"; 
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout, userLogout } from "../../store/api/auth/authSlice";


function TopNav() {
  const { t } = useTranslation();
  const { isAuthenticated, role,isLoading } = useAuth();

  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 


  const handleLogout = async () => {
    try {
      const res = await dispatch(userLogout()); 
      console.log(res);
      

      
      if(res?.meta?.requestStatus === "fulfilled"){
        dispatch(logout())
        toast.success("تم تسجيل الخروج بنجاح");
        navigate("/", { replace: true }); 
      }
        
      
      
    } catch (error) {
     return error
    }
  };

  return (
    <div className="w-full bg-black py-4">
      <div className="container text-white flex flex-wrap gap-3 items-center justify-between">
        <div className="w-full md:w-fit flex items-center justify-center gap-2">
          {/* email */}
          <div className="flex items-center gap-2 ltr:flex-row-reverse">
            <span className="text-sm">info@smartzone.com</span>
            <span>
              <TbMail />
            </span>
          </div>
          {/* phone */}
          <div className="flex items-center gap-2 ltr:flex-row-reverse">
            <span className="text-sm">002490000000</span>
            <span>
              <TbPhone />
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <span>
                <TbUser />
              </span>
              <Link to={isAuthenticated ? "/profile" : "/login"}>
                {isAuthenticated ? "profile" : t("common.login")}
              </Link>
            </div>

            <div>
              <button
                className={`btn btn-sm ${role === 100 && "btn-success"} ${
                  role === 10 && "btn-warning"
                }`}
                onClick={handleLogout}
                disabled={isLoading} 
              >
                {isLoading ? t("common.loading") : t("common.logout")}
              </button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
