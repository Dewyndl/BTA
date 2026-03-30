import { StyleSheet } from 'react-native';
import { FontFamily, FontsFamilyEnum } from '../../CustomText';
import { palette } from '../../../design';

export const selectStyles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: palette.borderMedium,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerError: {
    borderColor: palette.error,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 36,
  },
  valueText: {
    fontSize: 14,
    fontFamily: FontFamily[FontsFamilyEnum.MONTSERRAT_REGULAR],
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: -0.03,
    color: palette.textPrimary,
    flex: 1,
  },
  placeholderText: {
    color: palette.placeholder,
  },
  chevron: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  optionsContainer: {
    backgroundColor: palette.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
    maxHeight: 400,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.border,
  },
  optionText: {
    fontSize: 16,
    fontFamily: FontFamily[FontsFamilyEnum.MONTSERRAT_MEDIUM],
    color: palette.textPrimary,
  },
  selectedOption: {
    backgroundColor: palette.backgroundAlt,
  },
});
