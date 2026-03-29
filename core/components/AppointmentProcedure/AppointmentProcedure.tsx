import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { ArrowDownIcon, StringSelectTypeIcon } from '../../../assets';
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit';
import { AppointmentProceduresEnum } from '../../../features';
import { appointmentProceduresFaker } from '../../../features/store/entities/appointment/faker';
import { flexbox } from '../../design';
import type { IAppointmentCreateStepProps } from '../AppointmentCreate/interfaces';
import { AppointmentCreateStepsEnum } from '../AppointmentCreate/enums';

const DEFAULT_NEXT_STEP = AppointmentCreateStepsEnum.INJECTION_ZONES;
import { appointmentProcedureStyles } from './styles/ppointment-procedure.style';

export const AppointmentProcedure = ({
  getBody,
  setStep,
  allBody = {},
  nextStep,
}: Partial<IAppointmentCreateStepProps> & { nextStep?: unknown }) => {
  const initialType = (allBody?.procedureType as AppointmentProceduresEnum) ?? AppointmentProceduresEnum.BIOREVITALIZATION;
  const [selectedType, setSelectedType] = useState<AppointmentProceduresEnum>(initialType);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (type: AppointmentProceduresEnum) => {
    setSelectedType(type);
    setIsOpen(false);
    getBody?.({ ...allBody, procedureType: type });
    setStep?.((nextStep ?? DEFAULT_NEXT_STEP) as never);
  };

  return (
    <ScrollView contentContainerStyle={appointmentProcedureStyles.container}>
      <View style={[appointmentProcedureStyles.titleContainer, flexbox.alignCenter]}>
        <StringSelectTypeIcon />
        <CustomText
          value="Выберите тип приема"
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
      <View style={appointmentProcedureStyles.procedureContainer}>
        <View style={appointmentProcedureStyles.selectedProcedure}>
          <CustomText
            value={appointmentProceduresFaker[selectedType]}
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 18,
              color: '#222221',
            }}
          />
        </View>
        <Pressable onPress={() => setIsOpen(!isOpen)}>
          <View style={[flexbox.directionRow, flexbox.alignCenter, flexbox.justifyBetween, appointmentProcedureStyles.selectedProcedureTitle]} >
            <CustomText
              value={appointmentProceduresFaker[AppointmentProceduresEnum.OTHER]}
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 18,
                color: isOpen ? '#222221' : '#838383',
              }}
            />
            <ArrowDownIcon />
          </View>
        </Pressable>
        {isOpen && <View style={appointmentProcedureStyles.proceduresList}>
          {Object.values(AppointmentProceduresEnum).map((type) => (
            <Pressable key={type} onPress={() => handleSelect(type)} style={appointmentProcedureStyles.procedureItem}>
              <CustomText
                value={appointmentProceduresFaker[type]}
                textStyles={{
                  fontStyle: FontStyleEnum.NORMAL,
                  fontWeight: FontWeightEnum.MEDIUM,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                  fontSize: 18,
                  color: '#222221',
                }}
              />
            </Pressable>
          ))}
        </View>}
      </View>
    </ScrollView>
  );
};
