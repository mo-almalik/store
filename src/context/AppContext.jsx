import { ConfigProvider } from "antd";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [direction, setDirection] = useState(
    i18n.language === "ar" ? "rtl" : "ltr"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setDirection(lng === "ar" ? "rtl" : "ltr");
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.documentElement.className = direction;
  }, [language, direction]);

  const theme = {
    token: {
      fontFamily:
        direction === "rtl" ? "Noto Kufi Arabic serif" :  "Poppins serif",
    },
  };

  const value = {
    language,
    direction,
    changeLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      <ConfigProvider direction={direction} theme={theme}>
        <ToastContainer
          className={`toast-container ${direction}`}
          position={direction === "rtl" ? "top-right" : "top-left"}
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={direction === "rtl"}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={"light"}
          transition={Bounce}
          style={{
    fontFamily: direction === "rtl" ? "Noto Kufi Arabic serif" :  "Poppins serif",
  }}
        />
        {children}
      </ConfigProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
