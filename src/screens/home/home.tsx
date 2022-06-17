import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <Text onPress={() => navigation.navigate('NewsDetails')}>
        News details
      </Text>
    </View>
  );
};
