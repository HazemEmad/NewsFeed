import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, Text} from '../../components';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;
  return (
    <Container>
      <Text onPress={() => navigation.navigate('NewsDetails')} translated>
        helloText
      </Text>
    </Container>
  );
};
