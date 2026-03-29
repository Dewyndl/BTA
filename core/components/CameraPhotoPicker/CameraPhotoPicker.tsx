import React, { useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { CustomText } from '../../uikit';
import { ICameraPhotoPickerProps } from './interfaces';
import {
  cameraPhotoPickerStyles,
  instructionTextStyle,
  overlayInstructionTextStyle,
  permissionButtonTextStyle,
} from './styles';
import { DEFAULT_PLACEHOLDER } from './constants';
import { requestCameraPermission } from './helpers/request-camera-permission.helper';
import { showCameraError } from './helpers/show-camera-error.helper';
import { CancelPhotoIcon, CheckboxIcon, CheckIcon } from '../../../assets';
import { flexbox } from '../../design';

export const CameraPhotoPicker = ({
  value,
  onChange,
  placeholder = DEFAULT_PLACEHOLDER,
  instructionText,
  onConfirm,
  containerStyle,
  imageStyle,
}: ICameraPhotoPickerProps) => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);

  const text = instructionText ?? placeholder;

  const handleTakePhoto = async () => {
    if (!permission?.granted) {
      const granted = await requestCameraPermission(requestPermission);
      if (!granted) return;
    }

    if (!cameraRef.current || !isCameraReady) return;

    try {
      const result = await cameraRef.current.takePictureAsync({ quality: 0.8 });
      if (result?.uri) {
        onChange(result.uri);
      }
    } catch {
      showCameraError();
    }
  };

  const handleCancel = () => onChange(null);
  const handleConfirm = () => onConfirm?.();

  if (!permission) {
    return (
      <View style={[cameraPhotoPickerStyles.container, containerStyle]}>
        <CustomText value="Загрузка камеры..." textStyles={instructionTextStyle} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={[cameraPhotoPickerStyles.container, containerStyle, cameraPhotoPickerStyles.permissionContainer]}>
        <CustomText
          value="Разрешите доступ к камере для съёмки"
          textStyles={{ ...instructionTextStyle, textAlign: 'center' }}
        />
        <Pressable style={cameraPhotoPickerStyles.permissionButton} onPress={requestPermission}>
          <CustomText value="Разрешить" textStyles={permissionButtonTextStyle} />
        </Pressable>
      </View>
    );
  }

  if (value) {
    return (
      <View style={[cameraPhotoPickerStyles.container, containerStyle]}>
        <View style={[cameraPhotoPickerStyles.photoWrapper, cameraPhotoPickerStyles.photoWrapperWithBorder]}>
          <Image
            source={{ uri: value }}
            style={[cameraPhotoPickerStyles.photoImage, imageStyle]}
            resizeMode="cover"
          />
          <View style={cameraPhotoPickerStyles.overlayInstruction}>
            <CustomText value={text} textStyles={overlayInstructionTextStyle} />
          </View>
          <View style={cameraPhotoPickerStyles.actionsRow}>
            <Pressable style={[cameraPhotoPickerStyles.cancelButton, flexbox.alignCenter, flexbox.justifyCenter]} onPress={handleCancel}>
              <CancelPhotoIcon />
            </Pressable>
            <Pressable style={[cameraPhotoPickerStyles.confirmButton, flexbox.alignCenter, flexbox.justifyCenter]} onPress={handleConfirm}>
              <CheckboxIcon width={20} height={20} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[cameraPhotoPickerStyles.container, containerStyle]}>
      <View style={cameraPhotoPickerStyles.cameraWrapper}>
        <CameraView
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          facing="back"
          mode="picture"
          onCameraReady={() => setIsCameraReady(true)}
        />
        <View style={cameraPhotoPickerStyles.overlayInstruction}>
          <CustomText value={text} textStyles={overlayInstructionTextStyle} />
        </View>
        <View style={cameraPhotoPickerStyles.cameraControls}>
          <Pressable
            style={[cameraPhotoPickerStyles.shutterButton, !isCameraReady && cameraPhotoPickerStyles.shutterButtonDisabled]}
            onPress={handleTakePhoto}
            disabled={!isCameraReady}
          >
            <></>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
