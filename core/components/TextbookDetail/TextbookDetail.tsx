import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import type { ITextbookDetailProps } from './interfaces';
import { textbookDetailStyles } from './styles';

export const TextbookDetail = ({
  title,
  imageSource,
  body,
}: ITextbookDetailProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={textbookDetailStyles.scrollContent}
    >
      <View style={textbookDetailStyles.card}>
        <View style={textbookDetailStyles.titleWrapper}>
          <CustomText
            value={title}
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.SEMI_BOLD,
              fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
              fontSize: 18,
              color: '#222221',
            }}
          />
        </View>
        <View style={textbookDetailStyles.imageWrapper}>
          <Image
            source={imageSource}
            style={textbookDetailStyles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={textbookDetailStyles.body}>{body}</Text>
      </View>
    </ScrollView>
  );
};
