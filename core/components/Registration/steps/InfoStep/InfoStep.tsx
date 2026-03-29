import { View } from 'react-native';
import {
  Button,
  CustomText,
  Form,
  FormInput,
  FormSubmitButton,
} from '../../../../uikit';
import { InputTextTypesEnum } from '../../../../uikit/InputText/enums';
import { createRequiredSchema } from '../../../../../common/helpers/validation.helper';
import { aquaGradient, blackGradient, flexbox, palette } from '../../../../design';
import { IStepProps } from '../../interfaces';
import { RegistrationStepsEnum } from '../../enums';
import { BodyType } from '../../../../../common';
import { infoStepStyles } from './styles';
import { IEditUser, useEditUserMutation } from '../../../../../features/';

const REQUIRED_FIELDS = ['name', 'lastName', 'middleName', 'email'];
const VALIDATION_SCHEMA = {
  ...createRequiredSchema(REQUIRED_FIELDS),
  email: [
    { type: 'required' as const, message: 'Обязательное поле' },
    { type: 'email' as const, message: 'Введите корректный email (например, user@example.com)' },
    { type: 'maxLength' as const, value: 254, message: 'Email не должен превышать 254 символа' },
  ],
};

export const InfoStep = ({ getBody, setStep, allBody, scrollRef }: IStepProps) => {
  const [editUser] = useEditUserMutation();
  const initialValues = {
    name: allBody.name ? String(allBody.name) : '',
    lastName: allBody.lastName ? String(allBody.lastName) : '',
    middleName: allBody.middleName ? String(allBody.middleName) : '',
    email: allBody.email ? String(allBody.email) : '',
    clinickName: allBody.clinickName ? String(allBody.clinickName) : '',
    address: allBody.address ? String(allBody.address) : '',
  };

  const handleSubmit = async (values: BodyType) => {
    getBody({ ...allBody, ...values });
    const data: IEditUser = {
      u_name: String(values.name ?? ''),
      u_family: String(values.lastName ?? ''),
      u_middle: String(values.middleName ?? ''),
      u_email: String(values.email ?? ''),
      u_phone: String(allBody.phone ?? ''),
      u_id: String(allBody.id ?? ''),
      u_role: '2'
    };
    const authContainer = {
      u_hash: String(allBody.u_hash ?? ''),
      token: String(allBody.token ?? ''),
    };
    await editUser({
      data,
      auth: authContainer,
    });
    setStep(RegistrationStepsEnum.SUCCESS);
  };

  const handleSkip = () => {
    setStep(RegistrationStepsEnum.SUCCESS);
  };

  return (
    <Form
      key="info"
      initialValues={initialValues}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
      scrollRef={scrollRef}
    >
      <View style={infoStepStyles.container}>
        <View style={[flexbox.alignCenter, infoStepStyles.titleContainer]}>
          <CustomText
            value="Заполните информацию о себе"
            variant="medium"
            fontSize={16}
            color={palette.primaryLight}
            textAlign="center"
          />
        </View>
        <View>
          <View style={infoStepStyles.inputsContainer}>
            <FormInput name="name" placeholder="Имя" textInputType={InputTextTypesEnum.DEFAULT} filter={(text) => text.replace(/[^А-Яа-яёЁA-Za-z\s]/g, '')} />
            <FormInput name="lastName" placeholder="Фамилия" textInputType={InputTextTypesEnum.DEFAULT} filter={(text) => text.replace(/[^А-Яа-яёЁA-Za-z\s]/g, '')} />
            <FormInput name="middleName" placeholder="Отчество" textInputType={InputTextTypesEnum.DEFAULT} filter={(text) => text.replace(/[^А-Яа-яёЁA-Za-z\s]/g, '')} />
            <FormInput name="email" placeholder="E-mail" textInputType={InputTextTypesEnum.EMAIL} />
          </View>
          <View style={infoStepStyles.inputsContainer}>
            <FormInput
              name="clinickName"
              placeholder="Название клиники (не обязательно)"
              textInputType={InputTextTypesEnum.DEFAULT}
            />
            <FormInput
              name="address"
              placeholder="Адрес клиники (не обязательно)"
              textInputType={InputTextTypesEnum.DEFAULT}
            />
          </View>
          <View style={infoStepStyles.buttonsContainer}>
            <FormSubmitButton
              label="Сохранить и продолжить"
              textColor={palette.white}
              gradient={aquaGradient}
            />
            <Button
              label="Пропустить этот шаг"
              textColor={palette.white}
              gradient={blackGradient}
              onPress={handleSkip}
            />
          </View>
        </View>
      </View>
    </Form>
  );
};
