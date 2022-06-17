import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';

export type NewsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetails'
>;

export const NewsDetails: React.FC<NewsDetailsScreenProps> = props => {
  return (
    <View style={{flex: 1}}>
      <Text>News details Screen</Text>
    </View>
  );
};
