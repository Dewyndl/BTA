import React, { useCallback, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  View,
  type DimensionValue,
} from 'react-native';
import CustomText from '../../uikit/CustomText/CustomText';
import { Button } from '../../uikit';
import { IMAGES } from '../../../assets/images';
import { aquaGradient } from '../../design';
import { markPointsOnPhotoStyles } from './styles';

const INSTRUCTION = 'Отметьте точки для коррекции на фото';
const BTN_START_CORRECTION = 'Начать коррекцию';

type Point = { x: number; y: number };

type MarkPointsOnPhotoProps = {
  zoneLabel?: string;
  imageSource?: ImageSourcePropType;
  stepNumber?: number;
  onConfirm: () => void;
};

export const MarkPointsOnPhoto = ({
  zoneLabel = 'Лоб',
  imageSource = IMAGES.FOREHEAD_ZONE,
  stepNumber = 2,
  onConfirm,
}: MarkPointsOnPhotoProps) => {
  const [points, setPoints] = useState<Point[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleImagePress = useCallback(
    (evt: { nativeEvent: { locationX: number; locationY: number } }) => {
      if (isConfirmed) return;
      const { locationX, locationY } = evt.nativeEvent;
      setPoints((prev) => [...prev, { x: locationX, y: locationY }]);
    },
    [isConfirmed]
  );

  const handleClear = useCallback(() => {
    setPoints([]);
  }, []);

  const handleCheck = useCallback(() => {
    if (points.length > 0) {
      setIsConfirmed(true);
    }
  }, [points.length]);

  const handleStartCorrection = useCallback(() => {
    onConfirm();
  }, [onConfirm]);

  return (
    <View style={markPointsOnPhotoStyles.container}>
      <View style={markPointsOnPhotoStyles.stepBadge}>
        <CustomText
          value={`${stepNumber}`}
          textStyles={markPointsOnPhotoStyles.stepBadgeText}
        />
        <CustomText
          value={`${zoneLabel}`}
          textStyles={markPointsOnPhotoStyles.stepBadgeText}
        />
        <View style={{ width: 14 }} />
      </View>

      <Pressable
        style={markPointsOnPhotoStyles.imageWrapper}
        onPress={handleImagePress}
      >
        <Image
          source={imageSource}
          style={markPointsOnPhotoStyles.photoImage}
          resizeMode="cover"
        />
        {points.map((point, index) => (
          <View
            key={index}
            style={[
              markPointsOnPhotoStyles.point,
              {
                left: (point.x - 8) as DimensionValue,
                top: (point.y - 8) as DimensionValue,
              },
            ]}
          />
        ))}
      </Pressable>

      {!isConfirmed ? (
        <>
          <View style={markPointsOnPhotoStyles.instructionContainer}>
            <CustomText
              value={INSTRUCTION}
              textStyles={markPointsOnPhotoStyles.instructionText}
            />
          </View>
          {points.length > 0 ? (
            <View style={markPointsOnPhotoStyles.actionsRow}>
              <Pressable
                style={[markPointsOnPhotoStyles.actionButton, markPointsOnPhotoStyles.clearButton]}
                onPress={handleClear}
              >
                <CustomText value="✕" textStyles={markPointsOnPhotoStyles.actionButtonText} />
              </Pressable>
              <Pressable
                style={[markPointsOnPhotoStyles.actionButton, markPointsOnPhotoStyles.confirmButton]}
                onPress={handleCheck}
              >
                <CustomText value="✓" textStyles={markPointsOnPhotoStyles.actionButtonText} />
              </Pressable>
            </View>
          ) : (
            <View style={markPointsOnPhotoStyles.tapIconPlaceholder} />
          )}
        </>
      ) : (
        <Button
          label={BTN_START_CORRECTION}
          onPress={handleStartCorrection}
          gradient={aquaGradient}
          textColor="#FFF"
        />
      )}
    </View>
  );
};
