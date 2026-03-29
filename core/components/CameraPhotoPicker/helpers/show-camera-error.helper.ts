import { Alert } from 'react-native';
import { ALERT_MESSAGES } from '../constants';

export const showCameraError = (): void => {
  Alert.alert(ALERT_MESSAGES.ERROR_TITLE, ALERT_MESSAGES.ERROR_MESSAGE);
};
