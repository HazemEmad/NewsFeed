import React from 'react';
import {useContext} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
import {CustomImage, Text} from '../common';
import {styles} from './style';

export type NewsCardProps = {
  title: string;
  imageUrl: string;
  onPress: () => void;
};
export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: darkMode ? colors.black : colors.white,
        ...styles.container,
      }}>
      <Text textType="bold" style={styles.title}>
        {title}
      </Text>
      <CustomImage source={{uri: imageUrl}} style={styles.image} />
    </TouchableOpacity>
  );
};
