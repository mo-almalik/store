import React from "react";
import assets from "../utils/assets";
import { useTranslation } from "react-i18next";
import { TbAward, TbLockAccess, TbReplace, TbTruckDelivery } from "react-icons/tb";
 

function Hero() {
    const {t} = useTranslation()
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${assets.heroImageTwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          height: "70vh",
        }}
      >
        <div className="container h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-extrabold mb-2 text-main">
                {t("common.name")}
              </h1>
              <h2 className="text-3xl font-medium">{t("hero.title")}</h2>
              <button className="mt-4 bg-main rounded-md p-2 px-5 text-white cursor-pointer">
                {t("common.shopping")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-8 ">
        <div className="grid grid-cols-2 md:grid-cols-4 container text-center gap-5">
          <div className="flex flex-col items-center ">
          <div className="bg-main/90 p-2 rounded-lg text-light shadow-main/50 drop-shadow-lg">
            <TbTruckDelivery  className="size-6"  />
          </div>
            <div>
              <h3 className="text-black text-md my-2 font-bold">{t("hero.free")}</h3>
              <p className="w-full text-dark text-sm">{t("hero.free-text")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
          <div className="bg-main/90 p-2 rounded-lg text-light shadow-main/50 drop-shadow-lg">
            <TbAward  className="size-6"  />
          </div>
         
            <div>
              <h3 className="text-black text-md my-2 font-bold">{t("hero.quality")}</h3>
              <p className="w-full text-dark text-sm">{t("hero.quality-text")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
          <div className="bg-main/90 p-2 rounded-lg text-light shadow-main/50 drop-shadow-lg">
            <TbReplace  className="size-6"  />
          </div>
            
            <div>
              <h3 className="text-black text-md my-2 font-bold">{t("hero.support")}</h3>
              <p className="w-full text-dark text-sm">{t("hero.support-text")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
          <div className="bg-main/90 p-2 rounded-lg text-light shadow-main/50 drop-shadow-lg">
            <TbLockAccess  className="size-6"  />
          </div>
         
         
            <div>
              <h3 className="text-black text-md my-2 font-bold">{t("hero.payment")}</h3>
              <p className="w-full text-dark text-sm">{t("hero.payment-text")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
