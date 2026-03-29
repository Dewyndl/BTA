import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';

export const titleTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 16,
  color: '#222221',
  textAlign: 'center' as const,
};

export const infoTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 12,
  color: '#424242',
  textAlign: 'center' as const,
};

export const submitButtonTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
};

export const preparationDistributionSelectStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
  },
  headerIcon: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    alignItems: 'center',
    marginBottom: 24,
  },
  optionsBlock: {
    marginBottom: 20,
  },
  inputBlock: {
    marginBottom: 20,
  },
  infoBlock: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  toggleBlock: {
    marginBottom: 24,
  },
  toggleInputStyle: {
    borderColor: '#BEBEBE',
    borderWidth: 1,
    height: 24,
  },
  submitButton: {
    backgroundColor: '#E8E8E8',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
});
