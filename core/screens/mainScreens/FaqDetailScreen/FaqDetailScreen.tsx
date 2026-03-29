import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FaqDetail } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';

export const FaqDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const route = useRoute<RouteProp<MainStackParamList, 'FaqDetail'>>();
  const questionId = route.params?.questionId ?? 'other';

  return (
    <MainWrapper title="Частые вопросы" back={() => navigation.goBack()}>
      <FaqDetail questionId={questionId} />
    </MainWrapper>
  );
};
