import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomText } from '../../uikit';
import { Button } from '../../uikit/Button';
import { Form, FormInput, FormSubmitButton } from '../../uikit/Form';
import { InputTextTypesEnum } from '../../uikit/InputText/enums';
import { aquaGradient, blackGradient, palette } from '../../design';
import {
  BuildingIcon,
  MailIcon,
  PencilIcon,
  PhoneIconTeal,
} from '../../../assets';
import { flexbox } from '../../design';
import type { IProfile } from '../../../features';
import { profileStyles } from './styles';
import { createRequiredSchema } from '../../../common/helpers/validation.helper';
import type { ValidationSchema } from '../../../common/types';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, fillUser, useEditUserMutation } from '../../../features';

const getFullName = (p: IProfile) =>
  `${p.lastName} ${p.firstName} ${p.middleName}`.trim();

type ProfileViewProps = {
  profile: IProfile;
  onEdit: () => void;
  onBuySubscription?: (phone: string) => void;
};

const ProfileView = ({ profile, onEdit, onBuySubscription }: ProfileViewProps) => (
  <View style={profileStyles.scrollContent}>
    <View style={profileStyles.card}>
      <View style={profileStyles.nameBlock}>
        <CustomText
          value={getFullName(profile)}
          variant="medium"
          fontSize={22}
          color={palette.primary}
          textAlign="center"
        />
      </View>

      <View style={[profileStyles.infoBlock, flexbox.basic, flexbox.directionRow, flexbox.justifyCenter]}>
        <CustomText
          value="Активная подписка до: "
          variant="medium"
          fontSize={14}
          color={palette.textSecondary}
          textAlign="center"
        />
        <CustomText
          value={profile.subscriptionEndDate}
          variant="medium"
          fontSize={14}
          color={palette.primaryLight}
          textAlign="center"
        />
      </View>

      <View style={profileStyles.trialBlock}>
        <CustomText
          value={`Бесплатный пробный период: ${profile.trialDaysLeft} дн.`}
          variant="medium"
          fontSize={14}
          color={palette.textSecondary}
          textAlign="center"
        />
      </View>

      <View style={[profileStyles.contactRow, flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyCenter]}>
        <PhoneIconTeal size={16} />
        <CustomText value={profile.phone} variant="medium" fontSize={18} color={palette.textSecondary} textAlign="center" />
      </View>

      <View style={[profileStyles.contactRow, flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyCenter]}>
        <MailIcon size={16} />
        <CustomText value={profile.email} variant="medium" fontSize={18} color={palette.textSecondary} textAlign="center" />
      </View>

      <View style={[profileStyles.clinicBlock, flexbox.basic]}>
        <View style={profileStyles.clinicIconWrapper}>
          <BuildingIcon size={16} color={palette.primary} />
        </View>
        <View style={profileStyles.clinicName}>
          <CustomText
            value={profile.clinicName}
            variant="medium"
            fontSize={14}
            color={palette.textPrimary}
            textAlign="center"
          />
        </View>
        <View style={[flexbox.basic, flexbox.justifyCenter, flexbox.alignCenter, profileStyles.clinicAddress]}>
          <CustomText
            value={profile.clinicAddress}
            variant="medium"
            fontSize={14}
            color={palette.textSecondary}
            textAlign="center"
          />
        </View>
      </View>

      <View style={profileStyles.buttonsRow}>
        <Button
          label="Редактировать данные"
          textColor={palette.white}
          gradient={blackGradient}
          onPress={onEdit}
        />
        <Button
          label="Купить подписку"
          gradient={aquaGradient}
          textColor={palette.white}
          customButtonStyles={profileStyles.button}
          onPress={() => onBuySubscription?.(profile.phone)}
        />
      </View>
    </View>
  </View>
);

const EDIT_SCHEMA: ValidationSchema = {
  ...createRequiredSchema(['firstName', 'lastName', 'middleName', 'email']),
  email: [{ type: 'required', message: 'Обязательное поле' }, { type: 'email' }],
};

type ProfileEditProps = {
  profile: IProfile;
  onSave: (values: Partial<IProfile>) => void;
  onCancel: () => void;
};

const ProfileEdit = ({ profile, onSave, onCancel }: ProfileEditProps) => (
  <Form
    initialValues={{
      firstName: profile.firstName,
      lastName: profile.lastName,
      middleName: profile.middleName,
      email: profile.email,
      clinicName: profile.clinicName,
      clinicAddress: profile.clinicAddress,
    }}
    validationSchema={EDIT_SCHEMA}
    onSubmit={(values) => onSave(values as Partial<IProfile>)}
  >
    <View style={profileStyles.scrollContent}>
      <CustomText
        value="Заполните информацию о себе"
        variant="medium"
        fontSize={14}
        color={palette.primary}
      />

      <View style={profileStyles.formFields}>
        <FormInput name="firstName" placeholder="Имя" textInputType={InputTextTypesEnum.DEFAULT} />
        <FormInput name="lastName" placeholder="Фамилия" textInputType={InputTextTypesEnum.DEFAULT} />
        <FormInput name="middleName" placeholder="Отчество" textInputType={InputTextTypesEnum.DEFAULT} />
        <FormInput name="email" placeholder="E-mail" textInputType={InputTextTypesEnum.EMAIL} />
        <FormInput name="clinicName" placeholder="Название клиники" textInputType={InputTextTypesEnum.DEFAULT} />
        <FormInput
          name="clinicAddress"
          placeholder="Адрес клиники (не обязательно)"
          textInputType={InputTextTypesEnum.DEFAULT}
        />
      </View>

      <View style={profileStyles.editButtonsRow}>
        <FormSubmitButton
          label="Сохранить"
          gradient={aquaGradient}
          textColor={palette.white}
          customButtonStyles={profileStyles.button}
        />
        <Button
          label="Отмена"
          gradient={blackGradient}
          textColor={palette.white}
          customButtonStyles={profileStyles.button}
          onPress={onCancel}
        />
      </View>
    </View>
  </Form>
);

type ProfileProps = {
  onBuySubscription?: (phone: string) => void;
};

export const Profile = ({ onBuySubscription }: ProfileProps) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUsers);
  const [editUser] = useEditUserMutation();
  const [isEditMode, setIsEditMode] = useState(false);

  const profile: IProfile = {
    firstName: currentUser?.u_name ?? '',
    lastName: currentUser?.u_family ?? '',
    middleName: currentUser?.u_middle ?? '',
    email: currentUser?.u_email ?? '',
    phone: currentUser?.u_phone ?? '',
    subscriptionEndDate: '-',
    trialDaysLeft: 0,
    clinicName: currentUser?.u_city ?? '-',
    clinicAddress: '',
  };

  const handleEdit = () => setIsEditMode(true);
  const handleCancel = () => setIsEditMode(false);

  const handleSave = async (values: Partial<IProfile>) => {
    if (!currentUser) return;
    const updatedName = values.firstName ?? currentUser.u_name;
    const updatedFamily = values.lastName ?? currentUser.u_family ?? '';
    const updatedMiddle = values.middleName ?? currentUser.u_middle ?? '';
    const updatedEmail = values.email ?? currentUser.u_email ?? '';
    const result = await editUser({
      data: {
        u_id: currentUser.u_id,
        u_name: updatedName,
        u_family: updatedFamily,
        u_middle: updatedMiddle,
        u_email: updatedEmail,
        u_phone: currentUser.u_phone ?? '',
        u_role: currentUser.u_role as '1' | '2' | '3' | '4',
      },
      auth: {} as never,
    });
    if ('data' in result && result.data) {
      dispatch(fillUser({
        ...currentUser,
        u_name: updatedName,
        u_family: updatedFamily,
        u_middle: updatedMiddle,
        u_email: updatedEmail,
      }));
    }
    setIsEditMode(false);
  };

  if (isEditMode) {
    return (
      <ProfileEdit
        profile={profile}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <ProfileView
      profile={profile}
      onEdit={handleEdit}
      onBuySubscription={onBuySubscription}
    />
  );
};
