import React from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, View } from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import { Button } from '../../uikit';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { formatDate } from '../../../common';
import { appointmentDetailStyles } from './styles';

const PROCEDURE_LABEL = 'Процедура:';
const SCHEDULED_LABEL = 'Назначено:';
const NOTIFIED_LABEL = 'Пациент уведомлен:';
const LINK_PATIENT_CARD = 'Карточка пациента';
const LINK_SEND_REMINDER = 'Отправить напоминание';
const LINK_EDIT_RESCHEDULE = 'Изменить/перенести';
const BTN_START = 'Начать прием';
const BTN_CANCEL = 'Отменить процедуру';

type AppointmentDetailProps = {
  patientName: string;
  patientImageUrl?: ImageSourcePropType;
  procedure: string;
  scheduledAt: Date;
  notifiedAt?: Date;
  onPatientCardPress?: () => void;
  onSendReminderPress?: () => void;
  onEditPress?: () => void;
  onStartPress: () => void;
  onCancelPress: () => void;
};

export const AppointmentDetail = ({
  patientName,
  patientImageUrl = IMAGES.USER_IMG,
  procedure,
  scheduledAt,
  notifiedAt,
  onPatientCardPress,
  onSendReminderPress,
  onEditPress,
  onStartPress,
  onCancelPress,
}: AppointmentDetailProps) => {
  const notifiedText = notifiedAt ? formatDate(notifiedAt) : '—';

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={appointmentDetailStyles.scrollContent}
    >
      <View style={appointmentDetailStyles.card}>
        <View style={appointmentDetailStyles.profileSection}>
          <Image
            source={patientImageUrl}
            style={appointmentDetailStyles.avatar}
            resizeMode="cover"
          />
          <CustomText
            value={patientName}
            textStyles={appointmentDetailStyles.patientName}
          />
        </View>

        <View style={appointmentDetailStyles.infoRows}>
          <View style={appointmentDetailStyles.infoRow}>
            <CustomText value={PROCEDURE_LABEL} textStyles={appointmentDetailStyles.infoLabel} />
            <CustomText value={procedure} textStyles={appointmentDetailStyles.infoValue} />
          </View>
          <View style={appointmentDetailStyles.infoRow}>
            <CustomText value={SCHEDULED_LABEL} textStyles={appointmentDetailStyles.infoLabel} />
            <CustomText value={formatDate(scheduledAt)} textStyles={appointmentDetailStyles.infoValue} />
          </View>
          <View style={appointmentDetailStyles.infoRow}>
            <CustomText value={NOTIFIED_LABEL} textStyles={appointmentDetailStyles.infoLabel} />
            <CustomText value={notifiedText} textStyles={appointmentDetailStyles.infoValue} />
          </View>
        </View>

        <View style={appointmentDetailStyles.linksSection}>
          <Pressable onPress={onPatientCardPress} style={appointmentDetailStyles.link}>
            <CustomText value={LINK_PATIENT_CARD} textStyles={appointmentDetailStyles.linkText} />
          </Pressable>
          <View style={appointmentDetailStyles.linkDivider} />
          <Pressable onPress={onSendReminderPress} style={appointmentDetailStyles.link}>
            <CustomText value={LINK_SEND_REMINDER} textStyles={appointmentDetailStyles.linkText} />
          </Pressable>
          <View style={appointmentDetailStyles.linkDivider} />
          <Pressable onPress={onEditPress} style={appointmentDetailStyles.link}>
            <CustomText value={LINK_EDIT_RESCHEDULE} textStyles={appointmentDetailStyles.linkText} />
          </Pressable>
        </View>

        <View style={appointmentDetailStyles.buttonsSection}>
          <Button
            label={BTN_START}
            onPress={onStartPress}
            gradient={aquaGradient}
            textColor="#FFF"
          />
          <Button
            label={BTN_CANCEL}
            onPress={onCancelPress}
            textColor="#FFF"
            customButtonStyles={appointmentDetailStyles.cancelButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};
