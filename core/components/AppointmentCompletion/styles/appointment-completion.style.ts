import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

const TEAL = '#0E7C7B';

export const appointmentCompletionStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  titleContainer: {
    marginBottom: 30,
  },
  stepBadge: {
    alignSelf: 'center',
    backgroundColor: '#89C7B6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 16,
  },
  stepBadgeText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#FFF',
  },
  title: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 18,
    color: '#222221',
    textAlign: 'center',
    marginBottom: 24,
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 12,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  imageWrapperSelected: {
    borderColor: TEAL,
    borderStyle: 'dashed',
  },
  patientImage: {
    width: '100%',
    height: '100%',
  },
  patientNameRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  patientNameText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 18,
    color: '#1F7876',
  },
  imageBadge: {
    backgroundColor: TEAL,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  imageBadgeText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 12,
    color: '#FFF',
  },
  reminderGroup: {
    marginBottom: 24,
  },
  reminderGroupTitle: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
    color: '#222221',
    marginBottom: 12,
  },
  reminderToggles: {
    gap: 12,
  },
});
