import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppointmentsList } from '../AppointmentsList';
import { injectionStyles } from './styles';
import type { MainStackParamList } from '../../../app/navigations/MainNavigator/types/main-stack-param-list.type';
import type { IAppointment } from '../../../features';

export const Injection = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handleItemPress = (appointment: IAppointment) => {
    navigation.navigate('InspectionCreate', { id: appointment.id });
  };

  return (
    <View style={injectionStyles.container}>
      <AppointmentsList
        limit={6}
        isArchive
        title="Ближайшие приемы"
        onItemPress={handleItemPress}
      />
    </View>
  );
};
