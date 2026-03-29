import React, { useCallback, useMemo, useState } from 'react';
import type { BodyType } from '../../../../../common';
import { AppointmentCompletion } from '../../../AppointmentCompletion';
import { IMAGES } from '../../../../../assets/images';
import type { IAppointmentCreateStepProps } from '../../interfaces';

const STEP_INDICATOR = 'Первичный прием 5';
const DEFAULT_IMAGES = [IMAGES.USER_IMG, IMAGES.USER_IMG, IMAGES.USER_IMG];

const buildPatientName = (allBody: Record<string, unknown>): string => {
  const last = typeof allBody?.lastName === 'string' ? allBody.lastName : '';
  const first = typeof allBody?.firstName === 'string' ? allBody.firstName : '';
  const middle = typeof allBody?.middleName === 'string' ? allBody.middleName : '';
  return [last, first, middle].filter(Boolean).join(' ') || 'Пациент';
};

export const AppointmentCompletionStep = ({
  getBody,
  allBody = {},
  onComplete,
}: IAppointmentCreateStepProps & { onComplete?: (body: BodyType) => void }) => {
  const [scheduleExamination, setScheduleExamination] = useState(false);
  const [remindDayBefore, setRemindDayBefore] = useState(true);
  const [remindDayOf, setRemindDayOf] = useState(true);
  const [noReminder, setNoReminder] = useState(false);
  const [sendRecommendations, setSendRecommendations] = useState(false);
  const [sendCollage, setSendCollage] = useState(false);

  const patientName = useMemo(() => buildPatientName(allBody), [allBody]);

  const handleConfirm = useCallback(() => {
    const finalBody = {
      ...allBody,
      scheduleExamination,
      remindDayBefore,
      remindDayOf,
      noReminder,
      sendRecommendations,
      sendCollage,
    };
    getBody(finalBody);
    onComplete?.(finalBody);
  }, [
    allBody,
    getBody,
    noReminder,
    onComplete,
    remindDayBefore,
    remindDayOf,
    scheduleExamination,
    sendCollage,
    sendRecommendations,
  ]);

  return (
    <AppointmentCompletion
      stepIndicator={STEP_INDICATOR}
      patientImages={DEFAULT_IMAGES}
      patientName={patientName}
      imageBadge="80 x 80"
      scheduleExamination={scheduleExamination}
      onScheduleExaminationChange={(v) => {
        setScheduleExamination(v);
        getBody({ ...allBody, scheduleExamination: v });
      }}
      remindDayBefore={remindDayBefore}
      onRemindDayBeforeChange={(v) => {
        setRemindDayBefore(v);
        getBody({ ...allBody, remindDayBefore: v });
      }}
      remindDayOf={remindDayOf}
      onRemindDayOfChange={(v) => {
        setRemindDayOf(v);
        getBody({ ...allBody, remindDayOf: v });
      }}
      noReminder={noReminder}
      onNoReminderChange={(v) => {
        setNoReminder(v);
        getBody({ ...allBody, noReminder: v });
      }}
      sendRecommendations={sendRecommendations}
      onSendRecommendationsChange={(v) => {
        setSendRecommendations(v);
        getBody({ ...allBody, sendRecommendations: v });
      }}
      sendCollage={sendCollage}
      onSendCollageChange={(v) => {
        setSendCollage(v);
        getBody({ ...allBody, sendCollage: v });
      }}
      onConfirm={handleConfirm}
    />
  );
};
