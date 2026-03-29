import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const optionCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderRadius: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
    paddingVertical: 26,
    gap: 30,
  },
  containerSelected: {
    borderWidth: 2,
    borderColor: palette.primary,
  },
  iconWrapper: {
    marginRight: 16,
  },
  label: {
    flex: 1,
    maxWidth: 160
  },
});
