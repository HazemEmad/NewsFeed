import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, NewsDetails} from '../screens';
import {Header} from '../components';

export type RootStackParamList = {
  Home: undefined;
  NewsDetails: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: props => <Header props={props} title={'HOME'} />,
        }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{
          header: props => <Header props={props} title={'NEWS_DETAILS'} />,
        }}
      />
    </Stack.Navigator>
  );
};
