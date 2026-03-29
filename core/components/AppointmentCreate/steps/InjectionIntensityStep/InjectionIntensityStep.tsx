import React, { useCallback, useState } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import { Button, CustomText } from '../../../../uikit';
import type { IInjectionIntensityStepProps } from './interfaces';
import {
  CONFIRM_BUTTON_LABEL,
  DEFAULT_ZONE_TITLE,
  INSTRUCTION_TEXT,
  STEP_INDICATOR_NUMBER,
} from './constants';
import { injectionIntensityOptions } from './datas';
import {
  confirmButtonTextStyle,
  injectionIntensityStepStyles,
  instructionTextStyle,
  optionButtonTextStyle,
  stepPillTextStyle,
} from './styles';
import { aquaGradient } from '../../../../design';

const BODY_KEY_INTENSITY = 'injectionIntensityId';

export const InjectionIntensityStep = ({
  getBody,
  allBody,
  setStep,
  onComplete,
  nextStep,
}: IInjectionIntensityStepProps) => {
  const savedId = typeof allBody?.[BODY_KEY_INTENSITY] === 'string' ? allBody[BODY_KEY_INTENSITY] : null;
  const [selectedId, setSelectedId] = useState<string | null>(savedId ?? null);

  const zoneTitle = typeof allBody?.zoneTitle === 'string' ? allBody.zoneTitle : DEFAULT_ZONE_TITLE;

  const handleSelectOption = useCallback(
    (id: string) => {
      setSelectedId(id);
      getBody({ ...allBody, [BODY_KEY_INTENSITY]: id });
    },
    [allBody, getBody]
  );

  const handleConfirm = useCallback(() => {
    if (!selectedId) return;
    const bodyWithIntensity = { ...allBody, [BODY_KEY_INTENSITY]: selectedId };
    getBody(bodyWithIntensity);
    if (nextStep && setStep) {
      setStep(nextStep);
    } else {
      onComplete?.(bodyWithIntensity);
    }
  }, [allBody, getBody, nextStep, onComplete, selectedId, setStep]);

  return (
    <View style={injectionIntensityStepStyles.container}>
      <View style={injectionIntensityStepStyles.headerRow}>
        <View style={injectionIntensityStepStyles.stepPill}>
          <CustomText value={String(STEP_INDICATOR_NUMBER)} textStyles={stepPillTextStyle} />
        </View>
        <View style={injectionIntensityStepStyles.zonePill}>
          <CustomText value={zoneTitle} textStyles={stepPillTextStyle} />
        </View>
        <View style={injectionIntensityStepStyles.fakePill}></View>
      </View>

      <View style={injectionIntensityStepStyles.instruction}>
        <CustomText value={INSTRUCTION_TEXT} textStyles={instructionTextStyle} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={injectionIntensityStepStyles.cardsScroll}
        contentContainerStyle={injectionIntensityStepStyles.cardsContent}
      >
        {injectionIntensityOptions.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <View key={option.id} style={injectionIntensityStepStyles.card}>
              <Image
                source={option.image}
                style={injectionIntensityStepStyles.cardImage}
                resizeMode="cover"
              />
              <Pressable
                style={[
                  injectionIntensityStepStyles.cardButton,
                  isSelected && injectionIntensityStepStyles.cardButtonSelected,
                ]}
                onPress={() => handleSelectOption(option.id)}
              >
                <CustomText value={option.label} textStyles={optionButtonTextStyle} />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>

      <View>
        <Button 
          label={CONFIRM_BUTTON_LABEL}
          onPress={handleConfirm}
          gradient={aquaGradient}
          textColor="#FFF"
        />
      </View>
    </View>
  );
};
