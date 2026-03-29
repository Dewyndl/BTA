import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { OptionCard } from '../../uikit/OptionCard';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { FourDotsIcon, SingleSquareIcon, SyringeIcon } from '../../../assets';
import type {
  IPreparationDistributionSelectProps,
  PreparationDistributionType,
} from './interfaces';
import {
  INFO_TEXT,
  INPUT_PLACEHOLDER,
  OPTION_SEPARATE,
  OPTION_SINGLE,
  SKIP_TOGGLE_LABEL,
  SUBMIT_BUTTON_LABEL,
  TITLE_LINE_1,
  TITLE_LINE_2,
} from './constants';
import {
  preparationDistributionSelectStyles,
  titleTextStyle,
  infoTextStyle,
  submitButtonTextStyle,
} from './styles';
import { Button, InputText, InputTextTypesEnum } from '../../uikit';
import { aquaGradient } from '../../design';

const VALUE_SEPARATE: PreparationDistributionType = 'separate_syringe';
const VALUE_SINGLE: PreparationDistributionType = 'single_syringe';

export const PreparationDistributionSelect = ({
  value,
  preparationName,
  skipInFuture,
  onChange,
  onSubmit,
}: IPreparationDistributionSelectProps) => {
  const isSubmitEnabled = !!value && !!preparationName.trim();

  const handleSelectOption = (option: PreparationDistributionType) => {
    onChange({ preparationDistributionType: option });
  };

  const handlePreparationChange = (text: string) => {
    onChange({ preparationName: text });
  };

  const handleSkipToggle = (checked: boolean) => {
    onChange({ skipPreparationStep: checked });
  };

  return (
    <View style={preparationDistributionSelectStyles.container}>
      <View style={preparationDistributionSelectStyles.headerIcon}>
        <SyringeIcon size={26} />
      </View>

      <View style={preparationDistributionSelectStyles.title}>
        <CustomText value={TITLE_LINE_1} textStyles={titleTextStyle} />
        <CustomText value={TITLE_LINE_2} textStyles={titleTextStyle} />
      </View>

      <View style={preparationDistributionSelectStyles.optionsBlock}>
        <OptionCard
          icon={<FourDotsIcon size={24} />}
          label={OPTION_SEPARATE}
          isSelected={value === VALUE_SEPARATE}
          onPress={() => handleSelectOption(VALUE_SEPARATE)}
        />
        <OptionCard
          icon={<SingleSquareIcon size={24} />}
          label={OPTION_SINGLE}
          isSelected={value === VALUE_SINGLE}
          onPress={() => handleSelectOption(VALUE_SINGLE)}
        />
      </View>

      <View style={preparationDistributionSelectStyles.inputBlock}>
        <InputText
          inputName="preparationName"
          value={preparationName}
          change={(text) => handlePreparationChange(text)}
          blur={() => {}}
          textInputType={InputTextTypesEnum.DEFAULT}
          placeholder={INPUT_PLACEHOLDER}
        />
      </View>

      <View style={preparationDistributionSelectStyles.infoBlock}>
        <CustomText value={INFO_TEXT} textStyles={infoTextStyle} />
      </View>

      <View style={preparationDistributionSelectStyles.toggleBlock}>
        <SlideBtn
          title={SKIP_TOGGLE_LABEL}
          checked={skipInFuture}
          onValueChange={handleSkipToggle}
          thumbColor="#BEBEBE"
          customStyles={preparationDistributionSelectStyles.toggleInputStyle}
        />
      </View>

      <Button 
        label={SUBMIT_BUTTON_LABEL}
        onPress={onSubmit}
        isDisabled={!isSubmitEnabled}
        gradient={aquaGradient}
        textColor="#FFF"
      />
    </View>
  );
};
