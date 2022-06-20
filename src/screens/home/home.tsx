import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, NewsCard, SearchCard, Text} from '../../components';
import {Articles, getNews, NewsProps} from '../../services';
import {useState} from 'react';
import {styles} from './style';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  const [news, setNews] = useState<Articles[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currPage, setCurrPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const {navigation} = props;

  useEffect(() => {
    getNewsAPI(news);
  }, [currPage]);

  const getNewsAPI = (oldNews: Articles[]) => {
    getNews<NewsProps>(currPage, searchText).then(res => {
      setNews(oldNews.concat(res.articles));
      setRefreshing(false);
      setLoading(false);
      if (!totalPages)
        setTotalPages(Math.round(res.totalResults / res.articles.length));
    });
  };

  const renderItem = ({item}) => {
    return (
      <NewsCard
        title={item.title}
        imageUrl={item.urlToImage}
        onPress={() => navigation.navigate('NewsDetails', {details: item})}
      />
    );
  };

  const renderFooter = () => {
    if (currPage < totalPages && !refreshing && news.length != 0)
      return <ActivityIndicator />;
    return null;
  };

  const renderEmpty = () => (
    <Text textType="bold" translated style={styles.emptyText}>
      EMPTY_DATA
    </Text>
  );
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const onEndReached = () => {
    setCurrPage(currPage + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    if (currPage == 1) getNewsAPI([]);
    else setCurrPage(1);
  };

  const onSearch = () => {
    setLoading(true);
    if (currPage == 1) getNewsAPI([]);
    else setCurrPage(1);
  };

  return (
    <Container>
      <SearchCard
        onChangeText={s => setSearchText(s)}
        search={searchText}
        onSearch={onSearch}
      />
      {loading && <ActivityIndicator />}
      {!loading && (
        <FlatList
          data={news}
          keyExtractor={keyExtractor}
          removeClippedSubviews={true}
          maxToRenderPerBatch={60}
          windowSize={30}
          onEndReachedThreshold={0.001}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReached={onEndReached}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              enabled={true}
            />
          }
        />
      )}
    </Container>
  );
};
