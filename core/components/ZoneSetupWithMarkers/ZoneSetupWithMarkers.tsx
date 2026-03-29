import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  View,
  type DimensionValue,
} from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { Button } from '../../uikit';
import { BackIcon } from '../../../assets';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { preparationDistributionSelectStyles } from '../PreparationDistributionSelect/styles';
import { zoneSetupWithMarkersStyles } from './styles';

const SCREEN_TITLE = 'Первичный прием';
const SKIP_LABEL = 'Пропускать этот этап в дальнейшем';
const BUTTON_LABEL = 'Завершить постановку';
const HELP_LINK = 'Требуется помощь?';

const STEP_PILL_COLOR = '#89C7B6';
const INFO_PLACEHOLDER =
  'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта. Проводим детальный анализ вашей ситуации и документов.';

export type ZoneMarkerItem = {
  id: string;
  number: number;
  title: string;
  description: string;
  markerPosition: { top: string; left: string };
};

type ZoneSetupWithMarkersProps = {
  faceImageSource?: ImageSourcePropType;
  stepIndicator: string;
  zones: ZoneMarkerItem[];
  selectedZoneIndex?: number;
  skipInFuture: boolean;
  onSkipChange: (value: boolean) => void;
  onComplete: () => void;
  onHelpPress?: () => void;
  onBackPress?: () => void;
};

export const ZoneSetupWithMarkers = ({
  faceImageSource = IMAGES.GLABELLA_ZONE,
  stepIndicator,
  zones,
  selectedZoneIndex = 0,
  skipInFuture,
  onSkipChange,
  onComplete,
  onHelpPress,
  onBackPress,
}: ZoneSetupWithMarkersProps) => {
  const imageWidth = Dimensions.get('window').width - 48;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={zoneSetupWithMarkersStyles.scrollContent}
    >
      <View style={zoneSetupWithMarkersStyles.container}>
        <View style={zoneSetupWithMarkersStyles.header}>
          <Pressable
            style={zoneSetupWithMarkersStyles.backButton}
            onPress={onBackPress}
          >
            <BackIcon />
          </Pressable>
          <CustomText
            value={SCREEN_TITLE}
            textStyles={zoneSetupWithMarkersStyles.screenTitle}
          />
        </View>

        <View style={[zoneSetupWithMarkersStyles.stepPill, { backgroundColor: STEP_PILL_COLOR }]}>
          <CustomText
            value={stepIndicator}
            textStyles={zoneSetupWithMarkersStyles.stepPillText}
          />
        </View>

        <View style={zoneSetupWithMarkersStyles.imageWrapper}>
          <Image
            source={faceImageSource}
            style={[zoneSetupWithMarkersStyles.faceImage, { width: imageWidth }]}
            resizeMode="cover"
          />
          {zones.map((zone) => (
            <View
              key={zone.id}
              style={[
                zoneSetupWithMarkersStyles.marker,
                {
                  top: zone.markerPosition.top as DimensionValue,
                  left: zone.markerPosition.left as DimensionValue,
                },
              ]}
            >
              <CustomText
                value={String(zone.number)}
                textStyles={zoneSetupWithMarkersStyles.markerText}
              />
            </View>
          ))}
        </View>

        <View style={zoneSetupWithMarkersStyles.infoBlocks}>
          {zones.map((zone, index) => (
            <View
              key={zone.id}
              style={[
                zoneSetupWithMarkersStyles.infoBlock,
                index === selectedZoneIndex && zoneSetupWithMarkersStyles.infoBlockActive,
              ]}
            >
              <View
                style={[
                  zoneSetupWithMarkersStyles.infoNumberBadge,
                  { backgroundColor: STEP_PILL_COLOR },
                ]}
              >
                <CustomText
                  value={String(zone.number)}
                  textStyles={zoneSetupWithMarkersStyles.infoNumberText}
                />
              </View>
              <CustomText
                value={zone.description || INFO_PLACEHOLDER}
                textStyles={zoneSetupWithMarkersStyles.infoBlockText}
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
          onPress={onComplete}
          gradient={aquaGradient}
          textColor="#FFF"
        />

        <Pressable style={zoneSetupWithMarkersStyles.helpLink} onPress={onHelpPress}>
          <CustomText
            value={HELP_LINK}
            textStyles={zoneSetupWithMarkersStyles.helpLinkText}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};
