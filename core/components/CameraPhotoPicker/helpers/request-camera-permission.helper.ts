import { Alert } from 'react-native';
import type { PermissionResponse } from 'expo-modules-core';
import { ALERT_MESSAGES } from '../constants';

export const requestCameraPermission = async (
  requestPermission: () => Promise<PermissionResponse>
): Promise<boolean> => {
  const response = await requestPermission();
  const granted = response.granted;
  if (!granted) {
    Alert.alert(
      ALERT_MESSAGES.CAMERA_TITLE,
      ALERT_MESSAGES.CAMERA_MESSAGE,
      [{ text: 'OK' }]
    );
  }
  return granted;
};
