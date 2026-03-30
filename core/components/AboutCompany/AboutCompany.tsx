import React from 'react';
import { View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../../uikit';
import { ABOUT_COMPANY_BODY } from './constants';
import { aboutCompanyStyles as styles } from './styles';

type AboutCompanyProps = {
  body?: string;
};

export const AboutCompany = ({ body = ABOUT_COMPANY_BODY }: AboutCompanyProps) => {
  return (
    <View style={styles.scrollContent}>
      <CustomText
        value={body}
        variant="medium"
        fontSize={14}
        color={palette.textSecondary}
        customTextStyle={styles.body}
      />
    </View>
  );
};
