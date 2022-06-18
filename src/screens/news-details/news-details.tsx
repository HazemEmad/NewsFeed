import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, Text} from '../../components';

export type NewsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetails'
>;

export const NewsDetails: React.FC<NewsDetailsScreenProps> = props => {
  return (
    <Container>
      <Text>News details Screen</Text>
    </Container>
  );
};
