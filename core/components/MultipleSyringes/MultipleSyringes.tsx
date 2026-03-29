import React from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, View } from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { Button } from '../../uikit';
import { SyringeIcon } from '../../../assets';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { preparationDistributionSelectStyles } from '../PreparationDistributionSelect/styles';
import { multipleSyringesStyles } from './styles';

const TITLE = 'Один шприц с общей дозой';
const SKIP_LABEL = 'Пропускать этот этап в дальнейшем';
const BUTTON_LABEL = 'Начать процедуру';
const HELP_LINK = 'Требуется помощь?';

export type MultipleSyringeZone = {
  id: string;
  title: string;
  dosage: number;
  imageUrl: ImageSourcePropType;
};

type MultipleSyringesProps = {
  zones: MultipleSyringeZone[];
  skipInFuture: boolean;
  onSkipChange: (value: boolean) => void;
  onStartProcedure: () => void;
  onHelpPress?: () => void;
};

const formatDosage = (dosage: number): string => `${dosage} ед.`;

export const MultipleSyringes = ({
  zones,
  skipInFuture,
  onSkipChange,
  onStartProcedure,
  onHelpPress,
}: MultipleSyringesProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={multipleSyringesStyles.scrollContent}
    >
      <View style={multipleSyringesStyles.container}>
        <View style={multipleSyringesStyles.titleContainer}>
          <View style={preparationDistributionSelectStyles.headerIcon}>
            <SyringeIcon size={26} />
          </View>
          <CustomText value={TITLE} textStyles={multipleSyringesStyles.title} />
        </View>

        <View style={multipleSyringesStyles.zonesContainer}>
          {zones.map((zone) => (
            <View key={zone.id} style={multipleSyringesStyles.zoneCard}>
              <Image
                source={IMAGES.SYRINGE}
                style={multipleSyringesStyles.zoneImage}
                resizeMode="contain"
              />
            </View>
          ))}
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

        <Pressable style={multipleSyringesStyles.helpLink} onPress={onHelpPress}>
          <CustomText
            value={HELP_LINK}
            textStyles={multipleSyringesStyles.helpLinkText}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};
