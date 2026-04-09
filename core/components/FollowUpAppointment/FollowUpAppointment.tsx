import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BodyType } from '../../../common';
import { KeyboardAwareScrollView } from '../../uikit';
import { FollowUpAppointmentStepBuilder } from './builder';
import { FollowUpAppointmentStepsEnum } from './enums';
import { useCreateVisitMutation } from '../../../features';
import { selectUsers } from '../../../features/store/entities/user/user.slice';
import type { MainStackParamList } from '../../../app/navigations/MainNavigator/types/main-stack-param-list.type';

export const FollowUpAppointment = () => {
  const { currentUser } = useSelector(selectUsers);
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const [createVisit] = useCreateVisitMutation();
  const [body, setBody] = useState<BodyType>({});
  const [step, setStep] = useState<FollowUpAppointmentStepsEnum>(
    FollowUpAppointmentStepsEnum.APPOINTMENTS_LIST
  );

  const handleComplete = async (_finalBody: BodyType) => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const tz = -now.getTimezoneOffset();
    const tzSign = tz >= 0 ? '+' : '-';
    const tzH = pad(Math.floor(Math.abs(tz) / 60));
    const tzM = pad(Math.abs(tz) % 60);
    const formatted = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}${tzSign}${tzH}:${tzM}`;

    const result = await createVisit({
      u_id: currentUser?.u_id ?? '',
      b_start_address: currentUser?.u_city || 'Не указан',
      b_start_datetime: formatted,
      b_payment_way: '1',
      b_options: { type: 'followup' },
    });

    if ('error' in result || result.data?.code !== '200') {
      Alert.alert('Ошибка', (result as { data?: { message?: string } }).data?.message || 'Не удалось создать повторный приём');
      return;
    }

    const b_id = result.data?.data?.b_id;
    if (b_id) {
      navigation.replace('InspectionCreate', { id: b_id });
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps="handled"
      keyboardVerticalOffset={100}
    >
      <FollowUpAppointmentStepBuilder
        step={step}
        body={body}
        getAllBody={setBody}
        setStep={setStep}
        onComplete={handleComplete}
      />
    </KeyboardAwareScrollView>
  );
};
