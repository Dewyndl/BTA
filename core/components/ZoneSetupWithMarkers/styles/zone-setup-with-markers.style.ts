import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

export const zoneSetupWithMarkersStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  screenTitle: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 18,
    color: '#424242',
    flex: 1,
  },
  stepPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  stepPillText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 16,
    color: '#FFF',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  faceImage: {
    height: 280,
    backgroundColor: '#E8E8E8',
    borderRadius: 12,
  },
  marker: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#0E7C7B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
    color: '#FFF',
  },
  infoBlocks: {
    gap: 12,
    marginBottom: 24,
  },
  infoBlock: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
    gap: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  infoBlockActive: {
    borderColor: '#89C7B6',
  },
  infoNumberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoNumberText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.SEMI_BOLD,
    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
    fontSize: 14,
    color: '#FFF',
  },
  infoBlockText: {
    flex: 1,
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.REGULAR,
    fontFamily: FontsFamilyEnum.MONTSERRAT_REGULAR,
    fontSize: 14,
    color: '#424242',
    lineHeight: 20,
  },
  helpLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  helpLinkText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#424242',
  },
});
