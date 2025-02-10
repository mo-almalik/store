import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language); 
  const [direction, setDirection] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr'); 

 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    setLanguage(lng);
    setDirection(lng === 'ar' ? 'rtl' : 'ltr');
   
  };


  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.documentElement.className = direction === "rtl"  ? 'rtl' : 'ltr'
 
  }, [language, direction]);


  const value = {
    language,
    direction,
    changeLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => useContext(AppContext);