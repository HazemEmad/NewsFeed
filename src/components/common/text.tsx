import React, {useContext} from 'react';
import {StyleProp, Text as NativeText, TextStyle} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
export type TextProps = {
  style: TextStyle;
  textType?: 'regular' | 'bold' | 'light';
};
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const Text: React.FC<TextProps> = props => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);
  let fontWeight: FontWeight = 'normal';
  switch (props.textType) {
    case 'regular':
      fontWeight = 'normal';
      break;
    case 'bold':
      fontWeight = 'bold';
      break;
    case 'light':
      fontWeight = '500';
      break;
    default:
      break;
  }
  return (
    <NativeText
      {...props}
      style={{
        fontWeight: fontWeight,
        color: darkMode ? colors.white : colors.black,
        ...props.style,
      }}>
      {props.children}
    </NativeText>
  );
};
