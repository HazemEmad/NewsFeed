import React from 'react';
import {useContext} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
import {Icon} from './icon';
import {Text} from './text';

export type HeaderProps = {
  props: {};
  title: string;
};

export const Header: React.FC<HeaderProps> = ({props, title}) => {
  const {back, navigation} = props;
  const canGoBack = back;
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);

  return (
    <SafeAreaView
      {...props}
      style={{
        ...styles.container,
        backgroundColor: darkMode ? colors.black : colors.white,
      }}>
      {canGoBack && (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backIcon}>
          <Icon
            name={'arrow-left'}
            size={27}
            color={darkMode ? colors.white : colors.black}
          />
        </TouchableOpacity>
      )}
      <Text translated textType={'bold'} style={styles.text}>
        {title}
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'ios' ? 80 : 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {textAlign: 'center', fontSize: 18, bottom: 10},
  backIcon: {
    position: 'absolute',
    bottom: 5,
    left: 20,
  },
});
