import React, {createContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import { Theme_asyncKey } from '../constants/asyncStorage-keys';
import {getData, storeData} from '../utils';

export type DarkModeProviderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const initValue: DarkModeProviderProps = {
  darkMode: false,
  toggleDarkMode: () => {},
};
const DarkModeContext = createContext<DarkModeProviderProps>(initValue);

const DarkModeProvider = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    getData(Theme_asyncKey).then(persistValue => {
      if (persistValue != null) setDarkMode(persistValue);
    });
  }, []);

  useEffect(() => {
    storeData(darkMode, Theme_asyncKey);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
export {DarkModeContext, DarkModeProvider};
