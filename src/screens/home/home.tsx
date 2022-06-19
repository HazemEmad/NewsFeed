import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, Text} from '../../components';
import {API_KEY} from '@env';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  console.log(API_KEY);

  const {navigation} = props;
  return (
    <Container>
      <Text onPress={() => navigation.navigate('NewsDetails')} translated>
        helloText
      </Text>
    </Container>
  );
};
