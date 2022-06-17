import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, NewsDetails} from '../screens';

export type RootStackParamList = {
  Home: undefined;
  NewsDetails: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
    </Stack.Navigator>
  );
};
