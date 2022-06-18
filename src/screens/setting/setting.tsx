import React, {useContext} from 'react';
import {ScrollView, TouchableOpacity, Platform} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootTapParamList} from '../../navigations';
import {styles} from './style';
import {
  DarkModeContext,
  DarkModeProviderProps,
  LanguageContext,
  LanguageProviderProps,
} from '../../context';
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
  const {toggleLanguage} = useContext<LanguageProviderProps>(LanguageContext);

  const darkModeOptionText = darkMode ? 'REGULAR_THEME' : 'DARK_THEME';

  const items: ItemList[] = [
    {name: darkModeOptionText, action: toggleDarkMode},
    {name: 'LANGUAGE', action: toggleLanguage},
  ];
  const renderSettingItem = ({name, action}: ItemList) => (
    <TouchableOpacity onPress={action} key={name} style={styles.itemConainer}>
      <Text style={styles.itemText} translated>
        {name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Container>
      <ScrollView>{items.map(item => renderSettingItem(item))}</ScrollView>
    </Container>
  );
};
