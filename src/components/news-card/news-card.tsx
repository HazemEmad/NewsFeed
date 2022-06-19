import React from 'react';
import {useContext} from 'react';
import {Image, View} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
import {Text} from '../common';
import {styles} from './style';

export type NewsCardProps = {
  title: string;
  imageUrl: string;
};
export const NewsCard: React.FC<NewsCardProps> = ({title, imageUrl}) => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  return (
    <View
      style={{
        backgroundColor: darkMode ? colors.black : colors.white,
        ...styles.container,
      }}>
      <Text textType="bold" style={styles.title}>
        {title}
      </Text>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};
