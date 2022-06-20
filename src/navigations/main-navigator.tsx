import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyTabs} from './bottom-tab-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DarkModeContext, DarkModeProviderProps} from '../context';
import {colors} from '../constants';
import {ActivityIndicator} from 'react-native';

export const config = {
  screens: {
    Main: {
      path: 'main/:news?',
      parse: {
        news: (news: String) => `${news}`,
      },
    },
  },
};

export const MainNavigator = () => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  const backgroundStyle = {
    backgroundColor: darkMode ? colors.blackMode : colors.whiteMode,
  };

  const linking = {
    prefixes: ['newsfeed://'],
    config,
  };
  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator size="large" />}>
      <SafeAreaView style={{...backgroundStyle, flex: 1}}>
        <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
};
