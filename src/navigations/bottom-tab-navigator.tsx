import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Setting} from '../screens';
import {MainStack} from './main-stack';
import {Icon} from '../components';

export type RootTapParamList = {
  Main: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<RootTapParamList>();

export const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarLabelPosition: 'beside-icon'}}>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'settings'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
