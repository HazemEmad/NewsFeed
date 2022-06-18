import React from 'react';
import {DarkModeProvider, LanguageProvider} from './src/context';
import {MainNavigator} from './src/navigations';

const App = () => {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <MainNavigator />
      </LanguageProvider>
    </DarkModeProvider>
  );
};

export default App;
