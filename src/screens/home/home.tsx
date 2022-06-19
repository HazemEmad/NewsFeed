import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, NewsCard, Text} from '../../components';
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
      <NewsCard title="hazem" imageUrl="https://picsum.photos/200/300" />
    </Container>
  );
};
