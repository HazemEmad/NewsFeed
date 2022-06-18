import React, {createContext, useState} from 'react';
import {useColorScheme, View} from 'react-native';

export type DarkModeProviderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
const isDarkMode = useColorScheme() === 'dark';

const initValue: DarkModeProviderProps = {
  darkMode: isDarkMode,
  toggleDarkMode: () => {},
};
const DarkModeContext = createContext<DarkModeProviderProps>(initValue);

const DarkModeProvider = (props: any) => {
  const [darkMode, setDarkMode] = useState(isDarkMode);

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
