import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTapParamList} from '../../navigations';

export type SettingScreenProps = NativeStackScreenProps<
  RootTapParamList,
  'Setting'
>;

export const Setting: React.FC<SettingScreenProps> = props => {
  return (
    <View style={{flex: 1}}>
      <Text>Setting Screen</Text>
    </View>
  );
};
