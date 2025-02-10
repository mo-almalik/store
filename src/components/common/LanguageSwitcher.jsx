import React from 'react'
import { useAppContext } from '../../context/AppContext';

function LanguageSwitcher() {
    const { language, changeLanguage } = useAppContext();
    
    const oppositeLanguage = language === 'en' ? 'ar' : 'en';

    const languageText = oppositeLanguage === 'en' ? 'English' : 'العربية';
  return (
    <div className={'relative w-full'}>
            <button onClick={() => changeLanguage(oppositeLanguage)} className={'flex items-center '}>
                {languageText}
            </button>
        </div>
  )
}

export default LanguageSwitcher