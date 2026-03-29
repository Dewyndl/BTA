import React from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, View } from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import { Button } from '../../uikit';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { preparationDistributionSelectStyles } from '../PreparationDistributionSelect/styles';
import { beforeAfterCollageStyles } from './styles';

const STEP_NUMBER = 1;
const ZONE_LABEL = 'Межбровье';
const EVAL_OPTION_1 = 'Идеально';
const EVAL_OPTION_2 = 'Требуется коррекция с подсказками ИИ';
const EVAL_OPTION_3 = 'Откорректирую самостоятельно';
const EVAL_OPTION_4 = 'Нежелательные эффекты';
const TOGGLE_LABEL = 'Переслать коллаж пациенту';
const BUTTON_LABEL = 'Подтвердить и продолжить';

const EVAL_OPTIONS = [EVAL_OPTION_1, EVAL_OPTION_2, EVAL_OPTION_3, EVAL_OPTION_4];

type BeforeAfterCollageProps = {
  stepNumber?: number;
  zoneLabel?: string;
  beforeImages?: ImageSourcePropType[];
  afterImages?: ImageSourcePropType[];
  selectedOptionIndex: number;
  onOptionSelect: (index: number) => void;
  sendCollageToPatient: boolean;
  onSendCollageChange: (value: boolean) => void;
  onConfirm: () => void;
};

const DEFAULT_IMAGES = [IMAGES.USER_IMG, IMAGES.USER_IMG];

export const BeforeAfterCollage = ({
  stepNumber = STEP_NUMBER,
  zoneLabel = ZONE_LABEL,
  beforeImages = DEFAULT_IMAGES,
  afterImages = DEFAULT_IMAGES,
  selectedOptionIndex,
  onOptionSelect,
  sendCollageToPatient,
  onSendCollageChange,
  onConfirm,
}: BeforeAfterCollageProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={beforeAfterCollageStyles.scrollContent}
    >
      <View style={beforeAfterCollageStyles.container}>
        <View style={beforeAfterCollageStyles.stepBadge}>
          <CustomText
            value={`${stepNumber}`}
            textStyles={beforeAfterCollageStyles.stepBadgeText}
          />
          <CustomText
            value={`${zoneLabel}`}
            textStyles={beforeAfterCollageStyles.stepBadgeText}
          />
          <View style={{width: 14}} />
        </View>

        <View style={beforeAfterCollageStyles.collageGrid}>
          <View style={beforeAfterCollageStyles.collageRow}>
            <View style={beforeAfterCollageStyles.imageCard}>
              <Image
                source={beforeImages[0]}
                style={beforeAfterCollageStyles.collageImage}
                resizeMode="cover"
              />
              <View style={beforeAfterCollageStyles.imageLabel}>
                <CustomText value="До" textStyles={beforeAfterCollageStyles.imageLabelText} />
              </View>
            </View>
            <View style={beforeAfterCollageStyles.imageCard}>
              <Image
                source={afterImages[0]}
                style={beforeAfterCollageStyles.collageImage}
                resizeMode="cover"
              />
              <View style={beforeAfterCollageStyles.imageLabel}>
                <CustomText value="После" textStyles={beforeAfterCollageStyles.imageLabelText} />
              </View>
            </View>
          </View>
          <View style={beforeAfterCollageStyles.collageRow}>
            <View style={beforeAfterCollageStyles.imageCard}>
              <Image
                source={beforeImages[1] ?? beforeImages[0]}
                style={beforeAfterCollageStyles.collageImage}
                resizeMode="cover"
              />
              <View style={beforeAfterCollageStyles.imageLabel}>
                <CustomText value="До" textStyles={beforeAfterCollageStyles.imageLabelText} />
              </View>
            </View>
            <View style={beforeAfterCollageStyles.imageCard}>
              <Image
                source={afterImages[1] ?? afterImages[0]}
                style={beforeAfterCollageStyles.collageImage}
                resizeMode="cover"
              />
              <View style={beforeAfterCollageStyles.imageLabel}>
                <CustomText value="После" textStyles={beforeAfterCollageStyles.imageLabelText} />
              </View>
            </View>
          </View>
        </View>

        <View style={beforeAfterCollageStyles.optionsSection}>
          {EVAL_OPTIONS.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => onOptionSelect(index)}
              style={[
                beforeAfterCollageStyles.optionItem,
                selectedOptionIndex === index && beforeAfterCollageStyles.optionItemSelected,
              ]}
            >
              <View
                style={[
                  beforeAfterCollageStyles.optionCheckbox,
                  selectedOptionIndex === index && beforeAfterCollageStyles.optionCheckboxSelected,
                ]}
              >
                {selectedOptionIndex === index && (
                  <View style={beforeAfterCollageStyles.optionCheckmark} />
                )}
              </View>
              <CustomText value={option} textStyles={beforeAfterCollageStyles.optionText} />
            </Pressable>
          ))}
        </View>

        <View style={preparationDistributionSelectStyles.toggleBlock}>
          <SlideBtn
            title={TOGGLE_LABEL}
            checked={sendCollageToPatient}
            onValueChange={onSendCollageChange}
            thumbColor="#BEBEBE"
            customStyles={preparationDistributionSelectStyles.toggleInputStyle}
          />
        </View>

        <Button
          label={BUTTON_LABEL}
          onPress={onConfirm}
          gradient={aquaGradient}
          textColor="#FFF"
        />
      </View>
    </ScrollView>
  );
};
