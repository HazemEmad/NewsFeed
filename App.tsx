import React from 'react';
import {DarkModeProvider} from './src/context';
import {MainNavigator} from './src/navigations';

const App = () => {
  return (
    <DarkModeProvider>
      <MainNavigator />
    </DarkModeProvider>
  );
};

export default App;
