import React from 'react';
import {View, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {Container, CustomImage, Text} from '../../components';
import {styles} from './style';

export type NewsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetails'
>;

export const NewsDetails: React.FC<NewsDetailsScreenProps> = props => {
  const details = props.route?.params?.details;
  const {
    author,
    content,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  } = details;
  const date = new Date(publishedAt);
  const formatDate = date.toDateString() + ' | ' + date.toLocaleTimeString();
  const onOpenLink = () => Linking.openURL(url);

  return (
    <View style={{flex: 1}}>
      <CustomImage source={{uri: urlToImage}} style={styles.image} />
      <Container>
        <ScrollView>
          <Text textType="light" style={styles.date}>
            {formatDate}
          </Text>
          <View style={styles.row}>
            <Text translated textType="light" style={styles.by}>
              BY
            </Text>
            <Text textType="light" style={styles.author}>
              {author ?? source.name}
            </Text>
          </View>
          <Text textType="bold" style={styles.title}>
            {title}
          </Text>
          <Text style={styles.marginbottom}>{description}</Text>
          <Text style={styles.marginbottom}>{content}</Text>
          <TouchableOpacity onPress={onOpenLink}>
            <Text textType="light" style={styles.url}>
              {url}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </View>
  );
};
