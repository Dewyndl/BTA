import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const confirmationCodeSettingsStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  subtitleBlock: {
    marginTop: 8,
    marginBottom: 8,
  },
  phoneBlock: {
    marginBottom: 24,
  },
  section: {
    backgroundColor: palette.white,
    borderRadius: 12,
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: palette.border,
    marginVertical: 4,
  },
});
