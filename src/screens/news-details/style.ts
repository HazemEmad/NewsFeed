import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
export const styles = StyleSheet.create({
  image: {
    height: 230,
    width: '100%',
  },
  date: {
    textAlign: 'right',
    color: colors.shadow,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  by: {
    color: colors.shadow,
    marginRight: 5,
  },
  author: {
    color: colors.shadow,
  },
  title: {fontSize: 18, marginBottom: 10},
  marginbottom: {marginBottom: 10},
  url: {
    marginBottom: 10,
    textDecorationLine: 'underline',
    color: colors.url,
  },
});
