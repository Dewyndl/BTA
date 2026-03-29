import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const accountDeletionStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    flex: 1,
  },
  warning: {
    marginBottom: 24,
    textAlign: 'center',
  },
  timerWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },
  timerCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: palette.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    color: palette.white,
  },
  deleteButton: {
    backgroundColor: palette.textMuted,
    alignSelf: 'stretch',
  },
  deleteButtonActive: {
    backgroundColor: palette.error,
  },
});
