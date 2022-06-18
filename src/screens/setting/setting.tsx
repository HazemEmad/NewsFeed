import React, {useContext} from 'react';
import {ScrollView, TouchableOpacity, Platform} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTapParamList} from '../../navigations';
import {styles} from './style';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
import {Container, Text} from '../../components';

export type SettingScreenProps = NativeStackScreenProps<
  RootTapParamList,
  'Setting'
>;
type ItemList = {
  name: string;
  action: () => void;
};
export const Setting: React.FC<SettingScreenProps> = props => {
  const {darkMode, toggleDarkMode} =
    useContext<DarkModeProviderProps>(DarkModeContext);

  const darkModeOptionText = darkMode
    ? 'Change to Regular mode'
    : 'Change to Dark mode';

  const items: ItemList[] = [
    {name: darkModeOptionText, action: toggleDarkMode},
    {name: 'Change language to English', action: () => {}},
  ];
  const renderSettingItem = ({name, action}: ItemList) => (
    <TouchableOpacity onPress={action} key={name} style={styles.itemConainer}>
      <Text style={styles.itemText}>{name}</Text>
    </TouchableOpacity>
  );
  return (
    <Container>
      <ScrollView>{items.map(item => renderSettingItem(item))}</ScrollView>
    </Container>
  );
};
