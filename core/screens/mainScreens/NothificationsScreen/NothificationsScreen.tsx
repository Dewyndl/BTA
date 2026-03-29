import React from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Notifications } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import { CustomText } from '../../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';
import type { MainStackParamList } from '../../../../app';

export const NothificationsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleSettingsPress = () => {
    navigation.navigate('NotificationSettings');
  };

  const headerRight = (
    <Pressable onPress={handleSettingsPress} hitSlop={12}>
      <CustomText
        value="Настройки уведомлений"
        textStyles={{
          fontStyle: FontStyleEnum.NORMAL,
          fontWeight: FontWeightEnum.MEDIUM,
          fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
          fontSize: 14,
          color: '#0E7C7B',
        }}
      />
    </Pressable>
  );

  return (
    <MainWrapper
      title="Уведомления"
      back={() => navigation.goBack()}
      headerRightElement={headerRight}
    >
      <Notifications />
    </MainWrapper>
  );
};
