import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { CustomText, Select } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { SearchIcon } from '../../../assets';
import { PlayIcon } from '../../../assets';
import { flexbox } from '../../design';
import type { ITextbookItem } from '../../../features';
import { textbookItemsFaker } from '../../../features';
import { textbookContentStyles } from './styles';

const SORT_OPTIONS = [
  { label: 'Самые важные', value: 'important' },
  { label: 'По дате', value: 'date' },
  { label: 'По популярности', value: 'popular' },
];

type TextbookItemCardProps = {
  item: ITextbookItem;
  isListMode: boolean;
  onPress?: (item: ITextbookItem) => void;
};

const TextbookItemCard = ({ item, isListMode, onPress }: TextbookItemCardProps) => (
  <Pressable
    style={[
      textbookContentStyles.card,
      isListMode && textbookContentStyles.cardList,
    ]}
    onPress={() => onPress?.(item)}
  >
    <View style={[textbookContentStyles.imageWrapper]}>
      <Image
        source={item.imageUrl as ImageSourcePropType}
        style={textbookContentStyles.image}
        resizeMode="cover"
      />
    </View>
    <View style={textbookContentStyles.listTextWrapper}>
      <CustomText
        value={item.title}
        numberOfLines={isListMode ? 2 : 3}
        textStyles={{
          fontStyle: FontStyleEnum.NORMAL,
          fontWeight: FontWeightEnum.MEDIUM,
          fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
          fontSize: 12,
          color: '#222221',
        }}
      />
    </View>
  </Pressable>
);

type TextbookContentProps = {
  onItemPress?: (item: ITextbookItem) => void;
};

export const TextbookContent = ({ onItemPress }: TextbookContentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('important');

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return textbookItemsFaker;
    const query = searchQuery.toLowerCase();
    return textbookItemsFaker.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const isListMode = searchQuery.length > 0;

  const renderGridItem = ({ item }: { item: ITextbookItem }) => (
    <View style={textbookContentStyles.gridItem}>
      <TextbookItemCard item={item} isListMode={false} onPress={onItemPress} />
    </View>
  );

  const renderListItem = ({ item }: { item: ITextbookItem }) => (
    <TextbookItemCard item={item} isListMode onPress={onItemPress} />
  );

  return (
    <View style={textbookContentStyles.container}>
      <View style={[flexbox.basic, flexbox.directionRow, textbookContentStyles.searchRow]}>
        <View style={textbookContentStyles.searchWrapper}>
          <TextInput
            style={textbookContentStyles.searchInput}
            placeholder="Поиск"
            placeholderTextColor="#838383"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View style={textbookContentStyles.searchIcon}>
            <SearchIcon />
          </View>
        </View>
      </View>

      <View style={[flexbox.basic, flexbox.directionRow, flexbox.alignCenter, textbookContentStyles.sortRow]}>
        <CustomText
          value="Самые важны"
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 12,
            color: '#222221',
          }}
        />
      </View>

      <FlatList
        data={filteredItems}
        key={isListMode ? 'list' : 'grid'}
        numColumns={isListMode ? 1 : 2}
        keyExtractor={(item) => item.id}
        renderItem={isListMode ? renderListItem : renderGridItem}
        contentContainerStyle={textbookContentStyles.listContent}
        columnWrapperStyle={!isListMode ? textbookContentStyles.gridRow : undefined}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
