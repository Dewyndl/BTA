import React from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, View } from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { Button } from '../../uikit';
import { SyringeIcon } from '../../../assets';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { preparationDistributionSelectStyles } from '../PreparationDistributionSelect/styles';
import { appointmentCompletionStyles } from './styles';

const TITLE = 'Завершение приема';
const BUTTON_LABEL = 'Подтвердить и завершить';

const TOGGLE_SCHEDULE = 'Записать пациента на осмотр / коррекцию';
const TOGGLE_REMINDER_GROUP = 'Отправить напоминание о приеме:';
const TOGGLE_DAY_BEFORE = 'За сутки до осмотра';
const TOGGLE_DAY_OF = 'В день осмотра в 07:00';
const TOGGLE_NO_REMINDER = 'Не напоминать';
const TOGGLE_RECOMMENDATIONS = 'Отправить пациенту рекомендации после процедуры';
const TOGGLE_COLLAGE = 'Отправить пациенту коллаж фото';

export type AppointmentCompletionProps = {
  stepIndicator?: string;
  patientImages?: ImageSourcePropType[];
  patientName?: string;
  imageBadge?: string | null;
  scheduleExamination: boolean;
  onScheduleExaminationChange: (value: boolean) => void;
  remindDayBefore: boolean;
  onRemindDayBeforeChange: (value: boolean) => void;
  remindDayOf: boolean;
  onRemindDayOfChange: (value: boolean) => void;
  noReminder: boolean;
  onNoReminderChange: (value: boolean) => void;
  sendRecommendations: boolean;
  onSendRecommendationsChange: (value: boolean) => void;
  sendCollage: boolean;
  onSendCollageChange: (value: boolean) => void;
  onConfirm: () => void;
};

const DEFAULT_IMAGES = [IMAGES.USER_IMG, IMAGES.USER_IMG, IMAGES.USER_IMG];

export const AppointmentCompletion = ({
  stepIndicator = 'Первичный прием 5',
  patientImages = DEFAULT_IMAGES,
  patientName = 'Иванов',
  imageBadge,
  scheduleExamination,
  onScheduleExaminationChange,
  remindDayBefore,
  onRemindDayBeforeChange,
  remindDayOf,
  onRemindDayOfChange,
  noReminder,
  onNoReminderChange,
  sendRecommendations,
  onSendRecommendationsChange,
  sendCollage,
  onSendCollageChange,
  onConfirm,
}: AppointmentCompletionProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={appointmentCompletionStyles.scrollContent}
    >
      <View style={appointmentCompletionStyles.container}>
        <View style={appointmentCompletionStyles.titleContainer}>
          <View style={preparationDistributionSelectStyles.headerIcon}>
            <SyringeIcon size={26} />
          </View>

          <CustomText value={TITLE} textStyles={appointmentCompletionStyles.title} />
        </View>

        <View style={appointmentCompletionStyles.imagesRow}>
          {patientImages.map((img, index) => (
            <View
              key={index}
              style={[
                appointmentCompletionStyles.imageWrapper,
              ]}
            >
              <Image
                source={img}
                style={appointmentCompletionStyles.patientImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>

        <View style={appointmentCompletionStyles.patientNameRow}>
          <CustomText
            value={patientName}
            textStyles={appointmentCompletionStyles.patientNameText}
          />
          {imageBadge ? (
            <View style={appointmentCompletionStyles.imageBadge}>
              <CustomText
                value={imageBadge}
                textStyles={appointmentCompletionStyles.imageBadgeText}
              />
            </View>
          ) : null}
        </View>

        <View style={preparationDistributionSelectStyles.toggleBlock}>
          <SlideBtn
            title={TOGGLE_SCHEDULE}
            checked={scheduleExamination}
            onValueChange={onScheduleExaminationChange}
            thumbColor="#BEBEBE"
            customStyles={preparationDistributionSelectStyles.toggleInputStyle}
          />
        </View>

        <View style={appointmentCompletionStyles.reminderGroup}>
          <CustomText
            value={TOGGLE_REMINDER_GROUP}
            textStyles={appointmentCompletionStyles.reminderGroupTitle}
          />
          <View style={appointmentCompletionStyles.reminderToggles}>
            <SlideBtn
              title={TOGGLE_DAY_BEFORE}
              checked={remindDayBefore}
              onValueChange={onRemindDayBeforeChange}
              thumbColor="#BEBEBE"
              customStyles={preparationDistributionSelectStyles.toggleInputStyle}
            />
            <SlideBtn
              title={TOGGLE_DAY_OF}
              checked={remindDayOf}
              onValueChange={onRemindDayOfChange}
              thumbColor="#BEBEBE"
              customStyles={preparationDistributionSelectStyles.toggleInputStyle}
            />
            <SlideBtn
              title={TOGGLE_NO_REMINDER}
              checked={noReminder}
              onValueChange={onNoReminderChange}
              thumbColor="#BEBEBE"
              customStyles={preparationDistributionSelectStyles.toggleInputStyle}
            />
          </View>
        </View>

        <View style={preparationDistributionSelectStyles.toggleBlock}>
          <SlideBtn
            title={TOGGLE_RECOMMENDATIONS}
            checked={sendRecommendations}
            onValueChange={onSendRecommendationsChange}
            thumbColor="#BEBEBE"
            customStyles={preparationDistributionSelectStyles.toggleInputStyle}
          />
        </View>

        <View style={preparationDistributionSelectStyles.toggleBlock}>
          <SlideBtn
            title={TOGGLE_COLLAGE}
            checked={sendCollage}
            onValueChange={onSendCollageChange}
            thumbColor="#BEBEBE"
            customStyles={preparationDistributionSelectStyles.toggleInputStyle}
          />
        </View>

        <Button
          label={BUTTON_LABEL}
          onPress={onConfirm}
          gradient={aquaGradient}
          textColor="#FFF"
        />
      </View>
    </ScrollView>
  );
};
