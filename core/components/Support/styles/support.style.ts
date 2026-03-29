import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const supportStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleGap: {
    width: 8,
  },
  list: {
    backgroundColor: palette.white,
    borderRadius: 12,
    overflow: 'hidden',
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: palette.border,
    marginLeft: 16,
  },
});
