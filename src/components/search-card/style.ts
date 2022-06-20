import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: colors.shadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    height: '100%',
    width: '90%',
  },
});
