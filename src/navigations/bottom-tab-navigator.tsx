import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Setting} from '../screens';
import {MainStack} from './main-stack';

export type RootTapParamList = {
  Main: undefined;
  Setting: undefined;
};
const Tab = createBottomTabNavigator<RootTapParamList>();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 17,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
