import React from "react";
import { useTranslation } from "react-i18next";
import Search from "../Search";
import { TbHeartFilled, TbShoppingBag } from "react-icons/tb";
import {
  RiHeart3Fill,
  RiHome3Fill,
  RiShoppingCart2Fill,
  RiUser2Fill,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useFetchCartsQuery } from "../../store/api/cart";

function Navbar() {
  const { t } = useTranslation();
  // const {data,isLoading} = useFetchCartsQuery()

  
  
  return (
    <>
      <div className="bg-light py-5">
        <div className="container flex items-center justify-between gap-5">
          <div className="w-full md:w-[33%]">
            <Link to={'/'} className="text-black font-bold text-2xl">
              {t("common.name")}
            </Link>
          </div>
          <div className="w-full hidden md:block">
            <Search placeholder={t("common.search")} />
          </div>
          <div className="w-[33%] flex items-center justify-center gap-4 ">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <div className="relative">
                  <TbHeartFilled className="text-[#C4C4C4] size-7" />
                  <div className=" absolute text-white -top-3 rtl:-right-3 ltr:right-3 w-6 h-6 rounded-full flex items-center justify-center bg-main">
                    0
                  </div>
                </div>
                <div className="md:hidden lg:block">{t("common.wishlist")}</div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center">
                <div className="relative">
                  <TbShoppingBag className="text-[#C4C4C4] rtl:-right-3  size-7" />
                  {/* count cart */}
                  <div className=" absolute text-white -top-4 rtl:-right-3 ltr:right-3 w-6 h-6 rounded-full flex items-center justify-center bg-main">
                    0
                  </div>
                </div>
                <div className="md:hidden lg:block">{t("common.cart")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* mobile menu */}
      <div className="md:hidden bg-light py-4 fixed bottom-0 w-full px-10 z-50">
        <div className="flex items-center justify-between ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-main flex flex-col items-center"
                : "text-[#C4C4C4] flex flex-col items-center"
            }
          >
            <RiHome3Fill size={23} />
            <span>{t("navbar.home")}</span>
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-main flex flex-col items-center"
                : "text-[#C4C4C4] flex flex-col items-center"
            }
          >
            <RiHeart3Fill size={23} />
            <span>{t("common.wishlist")}</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-main flex flex-col items-center"
                : "text-[#C4C4C4] flex flex-col items-center"
            }
          >
            <RiUser2Fill size={23} />
            <span>{t("navbar.account")}</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-main flex flex-col items-center"
                : "text-[#C4C4C4] flex flex-col items-center"
            }
          >
            <RiShoppingCart2Fill size={23} />
            <span>{t("navbar.cart")}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
