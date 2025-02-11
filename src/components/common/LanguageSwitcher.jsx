import React from 'react'
import { useAppContext } from '../../context/AppContext';
import aricon from "../../assets/icons/united-arab-emirates.png"
import enicon from "../../assets/icons/united-states.png"

function LanguageSwitcher() {
    const { language, changeLanguage } = useAppContext();
    
    const oppositeLanguage = language === 'en' ? 'ar' : 'en';

    const languageText = oppositeLanguage === 'en' ?   <img src={enicon} alt='English' width={30} /> : <img src={aricon} alt='العربية' width={30} />;
  return (
    <div className={'relative w-full'}>
            <button onClick={() => changeLanguage(oppositeLanguage)} className={'flex items-center '}>
                {languageText}
            </button>
        </div>
  )
}

export default LanguageSwitcher