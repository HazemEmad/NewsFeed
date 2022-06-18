import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './bottom-tab-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {DarkModeContext, DarkModeProviderProps} from '../context';

export const MainNavigator = () => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  const backgroundStyle = {
    backgroundColor: darkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <NavigationContainer>
      <SafeAreaView style={{...backgroundStyle, flex: 1}}>
        <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};
