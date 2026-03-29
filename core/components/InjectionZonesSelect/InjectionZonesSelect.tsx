import React, { useCallback, useState } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { SelectInjectionZonesIcon } from '../../../assets';
import { Button, CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit';
import { injectionZonesFake } from '../../../features';
import { InjectionZoneItem } from '../InjectionZoneItem';
import { aquaGradient, flexbox } from '../../design';
import type { BodyType } from '../../../common';
import type { IAppointmentCreateStepProps } from '../AppointmentCreate/interfaces';
import { AppointmentCreateStepsEnum } from '../AppointmentCreate/enums';

import { injectionZonesSelectStyles } from './styles';

const DEFAULT_TITLE = 'Выберите зоны инъецирования';
const DEFAULT_SUBTITLE = 'Ботулотоксин типа А';
const DEFAULT_NEXT_STEP = AppointmentCreateStepsEnum.PHOTO;

export type InjectionZonesSelectProps = {
  getBody?: (body: BodyType) => void;
  setStep?: (step: string) => void;
  allBody?: BodyType;
  nextStep?: string;
  onComplete?: () => void;
  title?: string;
  subtitle?: string;
};

export const InjectionZonesSelect = ({
  getBody,
  setStep,
  allBody = {},
  nextStep,
  onComplete,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
}: InjectionZonesSelectProps = {}) => {
  const initialIds = Array.isArray(allBody?.selectedZoneIds)
    ? (allBody?.selectedZoneIds as string[])
    : [];
  const [selectedZoneIds, setSelectedZoneIds] = useState<Set<string>>(new Set(initialIds));

  const handleZonePress = useCallback(
    (zoneId: string) => {
      const next = new Set(selectedZoneIds);
      if (next.has(zoneId)) {
        next.delete(zoneId);
      } else {
        next.add(zoneId);
      }
      setSelectedZoneIds(next);
        getBody?.({ ...allBody, selectedZoneIds: Array.from(next) });
    },
    [allBody ?? {}, getBody, selectedZoneIds]
  );

  const handleConfirm = () => {
    getBody?.({ ...allBody, selectedZoneIds: Array.from(selectedZoneIds) });
    if (onComplete) {
      onComplete();
    } else {
      setStep?.(nextStep ?? DEFAULT_NEXT_STEP);
    }
  };

  return (
    <View style={injectionZonesSelectStyles.container}>
      <View style={[injectionZonesSelectStyles.titleContainer, flexbox.alignCenter]}>
        <SelectInjectionZonesIcon />
        <CustomText
          value={title}
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 16,
            color: '#424242',
            textAlign: 'center',
          }}
        />
        <CustomText
          value={subtitle}
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 14,
            color: '#838383',
          }}
        />
      </View>
      <View style={[injectionZonesSelectStyles.injectionZonesContainer, flexbox.directionRow, flexbox.wrap]}>
        {injectionZonesFake.map((injectionZone) => (
          <InjectionZoneItem
            key={injectionZone.id}
            imageUrl={injectionZone.imageUrl}
            title={injectionZone.title}
            isSelected={selectedZoneIds.has(injectionZone.id)}
            onPress={() => handleZonePress(injectionZone.id)}
          />
        ))}
      </View>
      <View style={injectionZonesSelectStyles.buttonsContainer}>
        <Button
          label="Подтвердить и продолжить"
          onPress={handleConfirm}
          gradient={aquaGradient}
          textColor="#FFF"
        />
      </View>
    </View>
  );
};
