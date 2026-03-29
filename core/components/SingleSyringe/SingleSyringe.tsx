import React from 'react';
import { Image, Pressable, View } from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { Button } from '../../uikit';
import { SyringeIcon } from '../../../assets';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { preparationDistributionSelectStyles } from '../PreparationDistributionSelect/styles';
import { singleSyringeStyles } from './styles';

const TITLE = 'Один шприц с общей дозой';
const DOSAGE = '41 ед.';
const SKIP_LABEL = 'Пропускать этот этап в дальнейшем';
const BUTTON_LABEL = 'Начать процедуру';
const HELP_LINK = 'Требуется помощь?';

type SingleSyringeProps = {
  skipInFuture: boolean;
  onSkipChange: (value: boolean) => void;
  onStartProcedure: () => void;
  onHelpPress?: () => void;
};

export const SingleSyringe = ({
  skipInFuture,
  onSkipChange,
  onStartProcedure,
  onHelpPress,
}: SingleSyringeProps) => {
  return (
    <View style={singleSyringeStyles.container}>
      <View style={preparationDistributionSelectStyles.headerIcon}>
        <SyringeIcon size={26} />
      </View>

      <CustomText
        value={TITLE}
        textStyles={singleSyringeStyles.title}
      />

      <View style={singleSyringeStyles.syringeWrapper}>
        <View style={singleSyringeStyles.syringeImageWrapper}>
          <Image
            source={IMAGES.SYRINGE}
            style={singleSyringeStyles.syringeImage}
            resizeMode="contain"
          />
          <View style={singleSyringeStyles.dosageBadge}>
            <CustomText value={DOSAGE} textStyles={singleSyringeStyles.dosageText} />
          </View>
        </View>
      </View>

      <View style={preparationDistributionSelectStyles.toggleBlock}>
        <SlideBtn
          title={SKIP_LABEL}
          checked={skipInFuture}
          onValueChange={onSkipChange}
          thumbColor="#BEBEBE"
          customStyles={preparationDistributionSelectStyles.toggleInputStyle}
        />
      </View>

      <Button
        label={BUTTON_LABEL}
        onPress={onStartProcedure}
        gradient={aquaGradient}
        textColor="#FFF"
      />

      <Pressable style={singleSyringeStyles.helpLink} onPress={onHelpPress}>
        <CustomText value={HELP_LINK} textStyles={singleSyringeStyles.helpLinkText} />
      </Pressable>
    </View>
  );
};
