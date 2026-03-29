import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const reminderIntervalsStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  instruction: {
    marginBottom: 24,
  },
  section: {
    backgroundColor: palette.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  divider: {
    height: 1,
    backgroundColor: palette.border,
  },
  heading: {
    paddingVertical: 8,
    marginBottom: 4,
  },
  intervalValue: {
    textDecorationLine: 'underline',
  },
  resetButton: {
    backgroundColor: palette.surfaceDark,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  needHelpLink: {
    alignItems: 'center',
  },
});
