import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

const TEAL = '#0E7C7B';

export const multipleSyringesStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  titleContainer: {
    marginBottom: 50,
  },
  title: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 16,
    color: '#222221',
    textAlign: 'center',
    marginBottom: 24,
  },
  zonesContainer: {
    marginBottom: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  zoneCard: {
    alignItems: 'center',
    width: '30%',
    minWidth: 100,
  },
  zoneImageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: TEAL,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 8,
  },
  zoneImage: {
    width: 234,
    height: 234,
  },
  dosageBadge: {
    position: 'absolute',
    right: -4,
    top: '25%',
    backgroundColor: TEAL,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  dosageText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 12,
    color: '#FFF',
  },
  zoneTitle: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 13,
    color: '#424242',
    textAlign: 'center',
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
