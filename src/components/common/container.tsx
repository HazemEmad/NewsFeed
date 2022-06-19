import React, {useContext} from 'react';
import {View} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';

export const Container: React.FC = props => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);
  const style = {
    backgroundColor: darkMode ? colors.blackMode : colors.whiteMode,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  };
  return <View style={style}>{props.children}</View>;
};
