import React from "react";
import { TbMail, TbPhone, TbUser, TbUserCircle } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom"; 
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout, userLogout } from "../../store/api/auth/authSlice";
import { Avatar, Dropdown } from "antd";

function TopNav() {
  const { t } = useTranslation();
  const { isAuthenticated, role, isLoading, user } = useAuth();
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleLogout = async () => {
    try {
      const res = await dispatch(userLogout()).unwrap(); 
      
      

      if (res?.meta?.requestStatus === "fulfilled") {
        await dispatch(logout());
        toast.success("تم تسجيل الخروج بنجاح");
        navigate("/", { replace: true }); 
      }
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
      dispatch(logout())
      navigate("/", { replace: true }); 
      window.location.reload()

    }
  };

  const menuItems = [
    {
      key: "1",
      label: (
        <Link to="/profile">{t("common.profile")}</Link>
      ),
    },
    {
      key: "2",
      label: (
        <span onClick={handleLogout} style={{ cursor: "pointer" }}>
          {t("common.logout")}
        </span>
      ),
    },
  ];

  return (
    <div className="w-full bg-black py-4">
      <div className="container text-white flex flex-wrap gap-3 items-center justify-between">
        <div className="w-full md:w-fit flex items-center justify-center gap-2">
          {/* Email */}
          <div className="flex items-center gap-2 ltr:flex-row-reverse">
            <span className="text-sm">info@smartzone.com</span>
            <span>
              <TbMail />
            </span>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 ltr:flex-row-reverse">
            <span className="text-sm">002490000000</span>
            <span>
              <TbPhone />
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-5">
            {/* User Avatar / Login */}
            <div>
              {isAuthenticated ? (
                <Dropdown menu={{ items: menuItems }} trigger={['click']} className="p-0">
                  <Avatar
                  className="cursor-pointer"
                    shape="square"  
                    icon={<TbUserCircle size={35} />}
                  >
                     
                  </Avatar>
                </Dropdown>
              ) : (
                <Link to="/login" className="flex items-center gap-2">
                  <TbUser />
                  {t("common.login")}
                </Link>
              )}
            </div>

            {/* Logout & Language Switcher */}
            <div>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
