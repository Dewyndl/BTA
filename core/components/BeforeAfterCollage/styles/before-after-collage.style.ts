import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

const TEAL = '#56B5B3';

export const beforeAfterCollageStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
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
  collageGrid: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 24,
  },
  collageRow: {
    flexDirection: 'row',
    gap: 12,
  },
  imageCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E8E8E8',
  },
  collageImage: {
    width: '100%',
    height: '100%',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#9E9E9E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  imageLabelText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 12,
    color: '#FFF',
  },
  optionsSection: {
    gap: 12,
    marginBottom: 24,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionItemSelected: {},
  optionCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#BEBEBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCheckboxSelected: {
    borderColor: TEAL,
  },
  optionCheckmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: TEAL,
  },
  optionText: {
    fontStyle: FontStyleEnum.NORMAL,
    fontWeight: FontWeightEnum.MEDIUM,
    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
    fontSize: 14,
    color: '#222221',
    flex: 1,
  },
});
