import React from 'react';
import { Alert } from 'react-native';
import { MainWrapper } from '../../../wrappers';
import { InspectionCreate } from '../../../components/InspectionCreate';
import { useGetVisitQuery, useListPatientsQuery, useVisitActionMutation, useGetPresignedUrlMutation } from '../../../../features';
import type { BodyType } from '../../../../common';
import { uploadPhotoToS3 } from '../../../../common';
import { ScreenProps } from '../types';

export const InspectionCreateScreen = ({
  route,
  navigation,
}: ScreenProps<'InspectionCreate'>) => {
  const { id } = route.params;
  const { data: visit } = useGetVisitQuery(id);
  const [visitAction] = useVisitActionMutation();
  const [getPresignedUrl] = useGetPresignedUrlMutation();
  const { data: patients = [] } = useListPatientsQuery({});
  const patientNameMap: Record<string, string> = {};
  patients.forEach((p) => { patientNameMap[p.u_id] = p.u_name; });

  const initialBody: BodyType = visit ? { patientName: patientNameMap[visit.u_id] ?? visit.u_id } : {};

  const handleComplete = async (finalBody: BodyType) => {
    if (finalBody.photoUri) {
      const photoUri = String(finalBody.photoUri);
      try {
        const firstZone = (finalBody.zonesData as any)?.[0]?.zone ?? 'general';
        const filename = photoUri.split('/').pop() || 'photo.jpg';
        const presignResult = await getPresignedUrl({
          visit_id: id,
          filename,
          content_type: 'image/jpeg',
          zone: firstZone,
          photo_type: 'before',
          purpose: 'inspection',
        });
        if ('data' in presignResult && presignResult.data) {
          await uploadPhotoToS3(presignResult.data.presigned_url, photoUri);
          await visitAction({
            b_id: id,
            action: 'edit',
            data: JSON.stringify({ photo_ids: [presignResult.data.s3_key] }),
          });
        }
      } catch {}
    }

    const actionResult = await visitAction({
      b_id: id,
      action: 'complete',
      data: JSON.stringify({
        zones_data: (finalBody.zonesData as unknown as { zone: string; schema: string; dose: number }[]) ?? [],
        schedule_followup: Boolean(finalBody.scheduleExamination),
        followup_interval_days: 0,
        send_collage_to_patient: Boolean(finalBody.sendCollageToPatient),
        patient_notification: {
          send: Boolean(finalBody.remindDayBefore || finalBody.remindDayOf),
        },
      }),
    });
    if ('error' in actionResult || actionResult.data === null) {
      Alert.alert('Ошибка', 'Не удалось завершить осмотр');
      return;
    }
    navigation.replace('Home');
  };

  return (
    <MainWrapper title="Осмотр / коррекция" back={() => navigation.goBack()}>
      <InspectionCreate initialBody={initialBody} onComplete={handleComplete} />
    </MainWrapper>
  );
};
