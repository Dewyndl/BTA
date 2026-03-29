import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const settingsStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  section: {
    backgroundColor: palette.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    gap: 12,
  },
  linkItem: {
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: palette.border,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  actionRowMuted: {
    opacity: 0.7,
  },
});
