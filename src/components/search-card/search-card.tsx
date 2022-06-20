import React from 'react';
import {useContext} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import {colors} from '../../constants';
import {DarkModeContext, DarkModeProviderProps} from '../../context';
import {Icon, Text} from '../common';
import {styles} from './style';

export type SearchCardProps = {
  search: string;
  onChangeText: (s: string) => void;
  onSearch: () => void;
};
export const SearchCard: React.FC<SearchCardProps> = ({
  search,
  onChangeText,
  onSearch,
}) => {
  const {darkMode} = useContext<DarkModeProviderProps>(DarkModeContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkMode ? colors.blackMode : colors.whiteMode,
      }}>
      <TouchableOpacity onPress={onSearch}>
        <Icon
          name="search"
          size={25}
          color={darkMode ? colors.white : colors.black}
        />
      </TouchableOpacity>
      {search == '' && (
        <Text translated style={{position: 'absolute', left: 50, right: 0}}>
          SEARCH_PLACEHOLDER
        </Text>
      )}
      <TextInput
        style={{
          ...styles.textInput,
          color: darkMode ? colors.white : colors.black,
        }}
        maxLength={500}
        onChangeText={onChangeText}
        value={search}
        placeholderTextColor={colors.shadow}
        onSubmitEditing={onSearch}
      />
    </View>
  );
};
