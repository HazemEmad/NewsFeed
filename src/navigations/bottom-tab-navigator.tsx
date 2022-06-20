import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Setting} from '../screens';
import {MainStack} from './main-stack';
import {Header, Icon, Text} from '../components';
import {useContext} from 'react';
import {DarkModeContext, DarkModeProviderProps} from '../context';
import {colors} from '../constants';

export type RootTapParamList = {
  Main: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<RootTapParamList>();

export const MyTabs = () => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  const style = {
    marginLeft: 20,
    textAlign: 'center',
  };

  const options = (itemName: string) => ({
    tabBarActiveBackgroundColor: darkMode ? colors.black : colors.white,
    tabBarInactiveBackgroundColor: darkMode ? colors.black : colors.white,
    tabBarActiveTintColor: darkMode ? colors.white : colors.black,
    headerShown: itemName == 'home' ? false : true,
    tabBarStyle: {backgroundColor: darkMode ? colors.black : colors.white},
    tabBarIcon: ({size, color}) => (
      <Icon name={itemName} size={size} color={color} />
    ),
    tabBarLabel: ({color}) => (
      <Text style={{color, ...style}} translated>
        {itemName.toUpperCase()}
      </Text>
    ),
    header: props => <Header props={props} title={itemName.toUpperCase()} />,
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Main" component={MainStack} options={options('home')} />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={options('settings')}
      />
    </Tab.Navigator>
  );
};
