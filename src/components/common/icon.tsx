import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
type IconScreenProps = {
  size: number;
  name: string;
  color: string;
};
export const Icon: React.FC<IconScreenProps> = ({name, size, color}) => {
  return <FeatherIcon name={name} size={size} color={color} />;
};
