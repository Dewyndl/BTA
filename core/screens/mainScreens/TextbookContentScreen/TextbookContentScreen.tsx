import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextbookContent } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const TextbookContentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleItemPress = (item: { id: string }) => {
    navigation.navigate('TextbookDetail', { id: item.id });
  };

  return (
    <MainWrapper title="Учебное пособие" back={() => navigation.goBack()} noScroll>
      <TextbookContent onItemPress={handleItemPress} />
    </MainWrapper>
  );
};
