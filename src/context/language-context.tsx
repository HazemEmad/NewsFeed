import React, {createContext, useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize';
import {Lang_asyncKey} from '../constants/asyncStorage-keys';
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

  const defaultVal = localLang == 'en' || localLang == 'de' ? localLang : 'en';
  const [language, setLanguage] = useState(defaultVal);

  useEffect(() => {
    getData(Lang_asyncKey).then(persistValue => {
      if (persistValue) setLanguage(persistValue);
    });
  }, []);

  useEffect(() => {
    storeData(language, Lang_asyncKey);
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
