import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, NewsCard, SearchCard, Text} from '../../components';
import {Articles, getNews, NewsProps} from '../../services';
import {useState} from 'react';
import {styles} from './style';
import {AxiosError, AxiosResponse} from 'axios';
import {colors} from '../../constants';
import {debounce} from 'lodash';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export const Home: React.FC<HomeScreenProps> = props => {
  const {navigation, route} = props;
  const [news, setNews] = useState<Articles[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currPage, setCurrPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>(
    route?.params?.searchString ?? '',
  );
  const [error, setError] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(5); //Developer accounts are limited to a max of 100 results

  useEffect(() => {
    const subscriber = getNewsAPI(currPage == 1 ? [] : news);
    return () => subscriber;
  }, [currPage]);

  const getNewsAPI = async (oldNews: Articles[]) => {
    return getNews<NewsProps>(currPage, searchText)
      .then((res: AxiosResponse) => {
        handlePages(res.data.totalResults, res.data.articles.length);
        setNews([...oldNews, ...res.data.articles]);
        setError('');
        endLoadingState();
      })
      .catch((e: AxiosError) => {
        if (!oldNews.length) setNews([]);
        if (e?.response?.data) setError(e.response.data.message);
        else setError('NETWORK_ERROR');
        endLoadingState();
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
      return error == '' ? (
        loading && <ActivityIndicator />
      ) : (
        <Text textType="bold" translated style={styles.errorColor}>
          {error}
        </Text>
      );
    return null;
  };

  const renderEmpty = () => (
    <Text
      textType="bold"
      translated={error == 'NETWORK_ERROR' || error == ''}
      style={{...styles.emptyText, ...(error != '' && {color: colors.red})}}>
      {error == '' ? 'EMPTY_DATA' : error.toString()}
    </Text>
  );
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const onEndReached = () => {
    if (currPage + 1 <= totalPages) setCurrPage(currPage + 1);
  };

  const endLoadingState = () => {
    setRefreshing(false);
    setLoading(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    if (currPage == 1) getNewsAPI([]);
    else setCurrPage(1);
  };
  const handlePages = (totalResults: number, articlesLength: number) => {
    const pages = Math.round(totalResults / articlesLength);
    if (pages < totalPages) setTotalPages(pages);
    else setTotalPages(5);
  };

  const onSearch = () => {
    setLoading(true);
    if (currPage == 1) getNewsAPI([]);
    else setCurrPage(1);
  };

  const debouncedSearch = debounce(() => {
    onSearch();
  }, 1000);

  return (
    <Container>
      <SearchCard
        onChangeText={s => {
          setSearchText(s);
          //debouncedSearch();
        }}
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
