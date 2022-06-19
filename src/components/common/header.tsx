import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import {Icon} from './icon';
import {Text} from './text';

export type HeaderProps = {
  props: {};
  title: string;
};

export const Header: React.FC<HeaderProps> = ({props, title}) => {
  const {back, navigation} = props;
  const canGoBack = back;
  return (
    <SafeAreaView {...props} style={styles.container}>
      {canGoBack && (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backIcon}>
          <Icon name={'arrow-left'} size={27} color={colors.black} />
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
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {color: colors.black, textAlign: 'center', fontSize: 18, bottom: 10},
  backIcon: {
    position: 'absolute',
    bottom: 5,
    left: 20,
  },
});
