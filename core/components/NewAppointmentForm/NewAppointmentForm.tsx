import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CreateAppointmentIcon } from '../../../assets/svgs';
import {
  Button,
  CustomModal,
  CustomText,
  FontStyleEnum,
  FontWeightEnum,
  Form,
  FormCheckbox,
  FormInput,
  FormSelect,
  FormSubmitButton,
  useFormContext,
} from '../../uikit';
import { InputTextTypesEnum } from '../../uikit/InputText/enums';
import type { ISelectOption } from '../../uikit/Select/interfaces';
import { FontsFamilyEnum } from '../../uikit/CustomText';
import { Select } from '../../uikit/Select';
import { aquaGradient, flexbox, palette } from '../../design';
import { createRequiredSchema } from '../../../common/helpers/validation.helper';
import type { BodyType } from '../../../common';
import { AppointmentCreateStepsEnum } from '../AppointmentCreate/enums';
import type { ValidationSchema } from '../../../common/types';
import { newAppointmentFormStyles } from './styles';
import { IPatientApi, useListPatientsQuery } from '../../../features';

const PHONE_MASK: import('react-native-mask-input').Mask = [
  '+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ',
  /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,
];

const BIRTH_DATE_MASK: import('react-native-mask-input').Mask = [
  /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/,
];

const GENDER_OPTIONS: ISelectOption[] = [
  { value: 'male', label: 'Мужской' },
  { value: 'female', label: 'Женский' },
  { value: 'other', label: 'Другое' },
];

const REMINDER_INTERVAL_OPTIONS: ISelectOption[] = [
  { value: '1d', label: '1 день' },
  { value: '3d', label: '3 дня' },
  { value: '1w', label: '1 неделя' },
  { value: '2w', label: '2 недели' },
  { value: '1m', label: '1 месяц' },
];

const MESSENGER_OPTIONS: ISelectOption[] = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'telegram', label: 'Telegram' },
  { value: 'sms', label: 'SMS' },
  { value: 'email', label: 'Email' },
];

const APPOINTMENT_TYPE_OPTIONS: ISelectOption[] = [
  { value: 'primary', label: 'Первичный прием' },
  { value: 'checkup', label: 'Осмотр / коррекция' },
  { value: 'repeat', label: 'Повторная процедура' },
  { value: 'other', label: 'Другая процедура' },
];

const APPOINTMENT_TYPE_DURATION: Record<string, string> = {
  primary: '45',
  checkup: '20',
  repeat: '30',
  other: '60',
};

const AppointmentTypeSelectField = () => {
  const { values, errors, handleChange } = useFormContext();

  const handleTypeChange = (value: string) => {
    handleChange('appointmentType', value);
    const duration = APPOINTMENT_TYPE_DURATION[value];
    if (duration) {
      handleChange('duration', duration);
    }
  };

  const currentValue = values.appointmentType != null ? String(values.appointmentType) : '';
  const error = errors.appointmentType;

  return (
    <View>
      <Select
        options={APPOINTMENT_TYPE_OPTIONS}
        value={currentValue}
        onChange={handleTypeChange}
        selectName="appointmentType"
        placeholder="Тип приема"
        error={error}
      />
      {error ? (
        <View style={{ marginTop: 4 }}>
          <CustomText
            value={error}
            variant="regular"
            fontSize={12}
            color={palette.error}
          />
        </View>
      ) : null}
    </View>
  );
};

const formatPatientPhone = (raw: string | null): string => {
  if (!raw) return '';
  const digits = raw.replace(/\D/g, '');
  const d = digits.startsWith('8') && digits.length === 11 ? '7' + digits.slice(1) : digits;
  if (d.length === 11 && d.startsWith('7')) {
    return `+7 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7, 9)}-${d.slice(9, 11)}`;
  }
  return raw;
};

const patientPickerStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 24,
    padding: 16,
    maxHeight: 400,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});

type PatientPickerModalProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const PatientPickerModal = ({ isVisible, setIsVisible }: PatientPickerModalProps) => {
  const { setValues } = useFormContext();
  const { data: patients = [], isLoading } = useListPatientsQuery({ lo: '0', lc: '50' });

  const handleSelect = (patient: IPatientApi) => {
    const nameParts = (patient.u_name ?? '').trim().split(/\s+/);
    const lastName = nameParts[0] ?? '';
    const firstName = nameParts[1] ?? '';
    const middleName = nameParts[2] ?? '';
    const phone = formatPatientPhone(patient.u_phone);
    setValues((prev) => ({
      ...prev,
      firstName,
      lastName,
      middleName,
      phone,
    }));
    setIsVisible(false);
  };

  return (
    <CustomModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={patientPickerStyles.wrapper}>
      <View style={patientPickerStyles.content}>
        <CustomText
          value="Выберите пациента"
          variant="medium"
          fontSize={16}
          color="#222221"
          textAlign="center"
        />
        {isLoading ? (
          <CustomText value="Загрузка..." variant="regular" fontSize={14} color="#666" />
        ) : (
          <FlatList
            data={patients}
            keyExtractor={(item) => item.u_id}
            renderItem={({ item }) => (
              <TouchableOpacity style={patientPickerStyles.item} onPress={() => handleSelect(item)}>
                <CustomText value={item.u_name ?? ''} variant="medium" fontSize={14} color="#222221" />
                {item.u_phone ? (
                  <CustomText value={item.u_phone} variant="regular" fontSize={12} color="#666" />
                ) : null}
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      </View>
    </CustomModal>
  );
};

const NAME_PATTERN = /^[а-яА-ЯёЁa-zA-Z\s\-]*$/;
const PHONE_FULL_LENGTH = 18;

const VALIDATION_SCHEMA: ValidationSchema = {
  firstName: [
    { type: 'required' as const, message: 'Обязательное поле' },
    { type: 'pattern' as const, value: NAME_PATTERN, message: 'Только буквы, пробелы и дефисы' },
  ],
  lastName: [
    { type: 'required' as const, message: 'Обязательное поле' },
    { type: 'pattern' as const, value: NAME_PATTERN, message: 'Только буквы, пробелы и дефисы' },
  ],
  middleName: [{ type: 'pattern' as const, value: NAME_PATTERN, message: 'Только буквы, пробелы и дефисы' }],
  ...createRequiredSchema(['gender']),
  birthDate: [
    { type: 'required' as const, message: 'Обязательное поле' },
    { type: 'minLength' as const, value: 10, message: 'Введите дату в формате ДД.ММ.ГГГГ' },
  ],
  phone: [
    { type: 'required' as const, message: 'Введите номер телефона' },
    { type: 'minLength' as const, value: PHONE_FULL_LENGTH, message: 'Введите полный номер телефона' },
  ],
  publicOffer: [{ type: 'custom' as const, validate: (v) => (v ? null : 'Необходимо согласие с офертой') }],
  privacyPolicy: [{ type: 'custom' as const, validate: (v) => (v ? null : 'Необходимо согласие на обработку данных') }],
};

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  middleName: '',
  gender: '',
  birthDate: '',
  phone: '',
  patientCharacteristics: '',
  reminderInterval: '',
  messengerForReminders: '',
  unsubscribeFromReminders: false,
  publicOffer: false,
  privacyPolicy: false,
  appointmentType: '',
  duration: '',
};

type NewAppointmentFormProps = {
  onSubmit?: (values: BodyType) => void;
  getBody?: (body: BodyType) => void;
  setStep?: React.Dispatch<React.SetStateAction<AppointmentCreateStepsEnum>>;
  allBody?: BodyType;
};

export const NewAppointmentForm = ({
  onSubmit = (_values: BodyType) => {},
  getBody,
  setStep,
  allBody,
}: NewAppointmentFormProps) => {
  const initialValues = { ...INITIAL_VALUES, ...allBody };
  const isStepFlow = !!getBody && !!setStep;
  const [pickerVisible, setPickerVisible] = useState(false);

  const handleSubmit = (values: BodyType) => {
    if (isStepFlow && getBody && setStep) {
      getBody(values);
      setStep(AppointmentCreateStepsEnum.PROCEDURE);
    } else {
      onSubmit(values);
    }
  };

  return (
    <Form
      key="patient-form"
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <PatientPickerModal isVisible={pickerVisible} setIsVisible={setPickerVisible} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={newAppointmentFormStyles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[newAppointmentFormStyles.titleContainer, flexbox.alignCenter]}>
          <CreateAppointmentIcon />
          <CustomText
            value="Заполните информацию о новом пациенте"
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 16,
              color: '#222221',
              textAlign: 'center',
            }}
          />
        </View>
        <View style={newAppointmentFormStyles.inputsContainer}>
          <Button
            label="Сменить пациента"
            onPress={() => setPickerVisible(true)}
            textColor="#1F7876"
            noFillDefaultStyles={true}
          />
          <FormInput
            name="firstName"
            placeholder="Имя"
            textInputType={InputTextTypesEnum.DEFAULT}
          />
          <FormInput
            name="lastName"
            placeholder="Фамилия"
            textInputType={InputTextTypesEnum.DEFAULT}
          />
          <FormInput
            name="middleName"
            placeholder="Отчество"
            textInputType={InputTextTypesEnum.DEFAULT}
          />
          <View style={[flexbox.directionRow, flexbox.justifyBetween, { gap: 12 }]}>
            <View style={{ flex: 1 }}>
              <FormSelect
                name="gender"
                options={GENDER_OPTIONS}
                placeholder="Пол"
              />
            </View>
            <View style={{ flex: 1 }}>
              <FormInput
                name="birthDate"
                placeholder="ДД.ММ.ГГГГ"
                textInputType={InputTextTypesEnum.DEFAULT}
                mask={BIRTH_DATE_MASK}
              />
            </View>
          </View>
          <FormInput
            name="phone"
            placeholder="Телефон"
            textInputType={InputTextTypesEnum.DEFAULT}
            mask={PHONE_MASK}
          />
          <AppointmentTypeSelectField />
          <FormInput
            name="duration"
            placeholder="Длительность (мин)"
            textInputType={InputTextTypesEnum.DEFAULT}
          />
          <FormInput
            name="patientCharacteristics"
            placeholder="Характеристики пациента"
            textInputType={InputTextTypesEnum.TEXTAREA}
          />
          <FormSelect
            name="reminderInterval"
            options={REMINDER_INTERVAL_OPTIONS}
            placeholder="Интервал напоминаний"
          />
          <FormSelect
            name="messengerForReminders"
            options={MESSENGER_OPTIONS}
            placeholder="Мессенджер для напоминаний"
          />
          <FormCheckbox
            name="unsubscribeFromReminders"
            title="Отписаться от напоминаний"
          />
          <FormCheckbox
            name="publicOffer"
            title="Регистрируясь, я подтверждаю, что ознакомился и даю своё согласие с публичной офертой"
          />
          <FormCheckbox
            name="privacyPolicy"
            title="Регистрируясь, я даю разрешение на обработку своих персональных данных в соответствие с действующей политикой конфиденциальности"
          />
          <FormSubmitButton
            label={isStepFlow ? 'Далее' : 'Создать приём'}
            textColor="#FFF"
            gradient={aquaGradient}
          />
        </View>
      </ScrollView>
    </Form>
  );
};
