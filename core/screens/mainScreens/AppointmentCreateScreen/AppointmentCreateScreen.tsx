import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { ScreenProps } from '../types';
import { MainWrapper } from '../../../wrappers';
import { AppointmentCreate } from '../../../components';
import { useCreatePatientMutation, useCreateVisitMutation, useGetPresignedUrlMutation, useVisitActionMutation } from '../../../../features';
import type { BodyType } from '../../../../common';
import { uploadPhotoToS3 } from '../../../../common';
import { selectUsers } from '../../../../features/store/entities/user/user.slice';

export const AppointmentCreateScreen = ({
  navigation,
}: ScreenProps<'AppointmentCreate'>) => {
  const { currentUser } = useSelector(selectUsers);
  const [createPatient] = useCreatePatientMutation();
  const [createVisit] = useCreateVisitMutation();
  const [getPresignedUrl] = useGetPresignedUrlMutation();
  const [visitAction] = useVisitActionMutation();

  const handleComplete = async (finalBody: BodyType) => {
    const firstName = String(finalBody.firstName ?? '');
    const lastName = String(finalBody.lastName ?? '');
    const middleName = String(finalBody.middleName ?? '');
    const fullName = [lastName, firstName, middleName].filter(Boolean).join(' ');
    const phone = String(finalBody.phone ?? '');

    const generatePassword = () => Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10).toUpperCase() + '1!';

    const patientResult = await createPatient({
      u_name: fullName,
      u_phone: phone,
      u_email: String(finalBody.email ?? ''),
      u_role: '1',
      st: '',
      data: JSON.stringify({ u_details: {}, password: generatePassword() }),
    });

    if (!('data' in patientResult) || !patientResult.data?.data?.u_id) {
      const msg = ('error' in patientResult && (patientResult.error as { data?: { message?: string } })?.data?.message) || 'Не удалось создать пациента';
      Alert.alert('Ошибка', msg);
      return;
    }

    const u_id = patientResult.data.data.u_id;
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const tz = -now.getTimezoneOffset();
    const tzSign = tz >= 0 ? '+' : '-';
    const tzH = pad(Math.floor(Math.abs(tz) / 60));
    const tzM = pad(Math.abs(tz) % 60);
    const formatted = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}${tzSign}${tzH}:${tzM}`;
    const visitResult = await createVisit({
      u_id,
      b_start_address: currentUser?.u_city ?? '',
      b_start_datetime: formatted,
      b_payment_way: '1',
      b_options: {},
    });

    if ('data' in visitResult && visitResult.data?.data?.b_id && finalBody.photoUri) {
      const b_id = visitResult.data.data.b_id;
      const photoUri = String(finalBody.photoUri);
      try {
        const filename = photoUri.split('/').pop() || 'photo.jpg';
        const presignResult = await getPresignedUrl({
          visit_id: b_id,
          filename,
          content_type: 'image/jpeg',
          zone: 'general',
          photo_type: 'before',
          purpose: 'appointment',
        });
        if ('data' in presignResult && presignResult.data) {
          await uploadPhotoToS3(presignResult.data.presigned_url, photoUri);
          await visitAction({
            b_id,
            action: 'edit',
            data: JSON.stringify({ photo_ids: [presignResult.data.s3_key] }),
          });
        }
      } catch {}
    }

    navigation.replace('Home');
  };

  return (
    <MainWrapper
      title="Первичный прием"
      back={() => navigation.goBack()}
    >
      <AppointmentCreate onComplete={handleComplete} />
    </MainWrapper>
  );
};
