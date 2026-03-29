import { Dimensions } from 'react-native';

export const getColumn = (column: number): number => {
  const { width } = Dimensions.get('window');
  return width / column;
};