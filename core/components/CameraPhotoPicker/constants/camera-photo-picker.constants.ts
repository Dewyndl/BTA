import { Dimensions } from 'react-native';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

export const CAMERA_HEIGHT_OFFSET = 200;
export const CAMERA_HEIGHT = WINDOW_HEIGHT - CAMERA_HEIGHT_OFFSET;

export const DEFAULT_PLACEHOLDER = 'Добавить фото';

export const ALERT_MESSAGES = {
  CAMERA_TITLE: 'Доступ к камере',
  CAMERA_MESSAGE: 'Разрешите доступ к камере для съёмки фото.',
  ERROR_TITLE: 'Ошибка',
  ERROR_MESSAGE: 'Не удалось сделать фото.',
} as const;
