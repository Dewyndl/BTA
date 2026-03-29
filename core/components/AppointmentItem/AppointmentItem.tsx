import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IAppointmentItemProps } from './interfaces';
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit';
import { appointmentTypesFaker } from '../../../features/store/entities/appointment/faker';
import { formatDate } from '../../../common';
import { AppointmentTypesEnum } from '../../../features';
import { flexbox } from '../../design';
import { appointmentItemStyles } from './styles';
import type { MainStackParamList } from '../../../app/navigations/MainNavigator/types/main-stack-param-list.type';

export const AppointmentItem = ({
  id,
  imageUrl,
  patientName,
  type,
  date,
  onPress,
}: IAppointmentItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate('ApointmentDetail', { id });
    }
  };

  const content = (
    <View style={[flexbox.basic, flexbox.directionRow, appointmentItemStyles.container]}>
            <View style={appointmentItemStyles.imgContainer}>
                <Image source={{ uri: imageUrl }} width={55} height={55} style={appointmentItemStyles.img} />
            </View>
            <View style={appointmentItemStyles.textContainer}>
                <CustomText
                    value={patientName}
                    textStyles={{
                        fontStyle: FontStyleEnum.NORMAL,
                        fontWeight: FontWeightEnum.SEMI_BOLD,
                        fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                        fontSize: 14,
                        color: "#222221",
                    }}
                />
                <View style={[flexbox.basic, flexbox.directionRow, flexbox.justifyBetween, flexbox.alignCenter]}>
                    <CustomText
                        value={appointmentTypesFaker[type]}
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.MEDIUM,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                            fontSize: 10,
                            color: type === AppointmentTypesEnum.CHECKUP ? '#009C6A' : type === AppointmentTypesEnum.PRIMARY ? '#026FD5' : '#1BC4EA',
                        }}
                    />
                    <CustomText
                        value={formatDate(date)}
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.MEDIUM,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                            fontSize: 12,
                            color: "#222221",
                        }}
                    />
                </View>
            </View>
        </View>
  );

  return <Pressable onPress={handlePress}>{content}</Pressable>;
};
