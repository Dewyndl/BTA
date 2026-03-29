import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { TextbookDetail } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { textbookItemsFaker } from '../../../../features';
import type { ITextbookItem } from '../../../../features';
import { ScreenProps } from '../types';

const getTextbookItemById = (id: string): ITextbookItem | undefined =>
  textbookItemsFaker.find((item) => item.id === id);

const DEFAULT_BODY =
  'Содержание учебного пособия. Загрузите полный текст статьи.';

export const TextbookDetailScreen = ({
  route,
  navigation,
}: ScreenProps<'TextbookDetail'>) => {
  const { id } = route.params;
  const item = getTextbookItemById(id) ?? textbookItemsFaker[0];
  const imageSource: ImageSourcePropType = item.imageUrl as ImageSourcePropType;
  const body = item.body ?? DEFAULT_BODY;

  return (
    <MainWrapper
      title="Учебное пособие"
      back={() => navigation.goBack()}
    >
      <TextbookDetail
        title={item.title}
        imageSource={imageSource}
        body={body}
      />
    </MainWrapper>
  );
};
