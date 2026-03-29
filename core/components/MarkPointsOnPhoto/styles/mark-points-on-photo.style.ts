import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

const TEAL = '#56B5B3';

export const markPointsOnPhotoStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  stepBadge: {
    alignSelf: 'flex-start',
    backgroundColor: TEAL,
    paddingHorizontal: 16,
    height: 34,   
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    marginBottom: 20,
  },
  stepBadgeText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#FFF',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
    marginBottom: 20,
    position: 'relative',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  point: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: TEAL,
  },
  instructionContainer: { 
    marginBottom: 20,
    maxWidth: 244,
    marginHorizontal: 'auto',
  },
  instructionText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 16,
    color: '#222221',
    textAlign: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#D7131F',
  },
  confirmButton: {
    backgroundColor: '#009C6A',
  },
  actionButtonText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_BOLD,
    fontSize: 24,
    color: '#FFF',
  },
  tapIconPlaceholder: {
    height: 48,
    marginBottom: 20,
  },
});
