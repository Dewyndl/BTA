import { StyleSheet } from 'react-native';

export const notificationSettingsStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  slideWrapper: {
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 12,
    marginHorizontal: 16,
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginTop: 8,
    marginBottom: 16,
  },
  templateSection: {
    paddingTop: 16,
  },
  templateLink: {
    paddingVertical: 4,
    marginBottom: 12,
    gap: 4,
  },
  timeRangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
});
