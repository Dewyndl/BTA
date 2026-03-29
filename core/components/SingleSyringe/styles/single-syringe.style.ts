import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

const TEAL = '#0E7C7B';

export const singleSyringeStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
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
  syringeWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 24,
  },
  syringeImageWrapper: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: TEAL,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  syringeImage: {
    width: 160,
    height: 160,
  },
  dosageBadge: {
    position: 'absolute',
    right: 10,
    top: '35%',
    backgroundColor: TEAL,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  dosageText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#FFF',
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
