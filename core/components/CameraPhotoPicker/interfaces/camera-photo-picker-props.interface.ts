import { ImageStyle, ViewStyle } from 'react-native';

export interface ICameraPhotoPickerProps {
  value: string | null;
  onChange: (uri: string | null) => void;
  placeholder?: string;
  instructionText?: string;
  onConfirm?: () => void;
  size?: number;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}
