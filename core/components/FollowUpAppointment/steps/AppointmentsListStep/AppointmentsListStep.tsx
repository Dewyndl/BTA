import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { MainStackParamList } from '../../../../../app/navigations/MainNavigator/types/main-stack-param-list.type';
import type { IFollowUpAppointmentStepProps } from '../../interfaces';
import { FollowUpAppointmentStepsEnum } from '../../enums';
import { AppointmentsList } from '../../../AppointmentsList';
import { Button } from '../../../../uikit';
import { aquaGradient } from '../../../../design';
import type { IAppointment } from '../../../../../features';

const APPOINTMENTS_LIMIT = 5;

export const AppointmentsListStep = ({
  setStep,
}: Pick<IFollowUpAppointmentStepProps, 'setStep'>) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleItemPress = (appointment: IAppointment) => {
    navigation.navigate('FollowUpAppointmentCreate', { id: appointment.id });
  };

  const handleNext = () => {
    setStep(FollowUpAppointmentStepsEnum.PROCEDURE);
  };

  return (
    <View style={{paddingHorizontal: 16}}>
      <AppointmentsList
        title="Ближайшие приёмы"
        isArchive={true}
        limit={APPOINTMENTS_LIMIT}
        onItemPress={handleItemPress}
      />
      <Button
        label="Далее"
        onPress={handleNext}
        customButtonStyles={{ marginTop: 24 }}
        gradient={aquaGradient}
        textColor="#FFF"
      />
    </View>
  );
};
