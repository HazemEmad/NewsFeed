import React, {createContext, useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize';
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
  const localLang = RNLocalize.getLocales()[0].languageCode;
  console.log('======>', localLang);

  const defaultVal = localLang == 'en' || localLang == 'de' ? localLang : 'en';
  const [language, setLanguage] = useState(defaultVal);

  useEffect(() => {
    getData('@lang').then(persistValue => {
      if (persistValue) setLanguage(persistValue);
    });
  }, []);
  console.log(RNLocalize.getLocales());

  useEffect(() => {
    storeData(language, '@lang');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language == 'en' ? 'de' : 'en');
  };

  return (
    <LanguageContext.Provider value={{language, toggleLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
};
export {LanguageContext, LanguageProvider};
