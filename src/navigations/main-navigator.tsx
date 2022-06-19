import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './bottom-tab-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DarkModeContext, DarkModeProviderProps} from '../context';
import {colors} from '../constants';

export const MainNavigator = () => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  const backgroundStyle = {
    backgroundColor: darkMode ? colors.blackMode : colors.whiteMode,
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={{...backgroundStyle, flex: 1}}>
        <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};
