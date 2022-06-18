import React from 'react';
import {ViewStyle} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
type IconScreenProps = {
  size?: number;
  name: string;
  color?: string;
  style?: ViewStyle;
};
export const Icon: React.FC<IconScreenProps> = ({name, size, color, style}) => {
  return <FeatherIcon name={name} size={size} color={color} style={style} />;
};
