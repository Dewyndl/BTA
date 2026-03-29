import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

export const appointmentDetailStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: 'rgba(137, 199, 182, 0.15)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#89C7B6',
    padding: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  patientName: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 18,
    color: '#222221',
    textAlign: 'center',
  },
  infoRows: {
    gap: 12,
    marginBottom: 24,
  },
  infoRow: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#838383',
  },
  infoValue: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
    color: '#222221',
  },
  linksSection: {
    marginBottom: 24,
  },
  link: {
    paddingVertical: 12,
  },
  linkText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#222221',
  },
  linkDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  buttonsSection: {
    gap: 12,
  },
  cancelButton: {
    backgroundColor: '#D7131F',
  },
});