import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, Text} from '../../components';
import {useEffect} from 'react';
import {getNews, NewsProps} from '../../services';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  useEffect(() => {
    /* getNews<NewsProps>(1).then(res => {
      console.log(res);
    }); */
  }, []);
  const {navigation} = props;
  return (
    <Container>
      <Text onPress={() => navigation.navigate('NewsDetails')} translated>
        helloText
      </Text>
    </Container>
  );
};
