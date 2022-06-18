import React, {createContext, useEffect, useState} from 'react';
import {getData, storeData} from '../utils';

export type LanguageProviderProps = {
  language: string;
  toggleLanguage: () => void;
};

const initValue: LanguageProviderProps = {
  language: 'en',
  toggleLanguage: () => {},
};
const LanguageContext = createContext<LanguageProviderProps>(initValue);

const LanguageProvider = (props: any) => {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    getData('@lang').then(persistValue => {
      if (persistValue) setLanguage(persistValue);
    });
  }, []);

  useEffect(() => {
    storeData(language, '@lang');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language == 'en' ? 'ar' : 'en');
    console.log('==>>', language);
  };

  return (
    <LanguageContext.Provider value={{language, toggleLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
};
export {LanguageContext, LanguageProvider};
