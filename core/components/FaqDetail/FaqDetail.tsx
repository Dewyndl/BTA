import React from 'react';
import { View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../../uikit';
import { FAQ_CONTENT } from './constants';
import { faqDetailStyles as styles } from './styles';

type FaqDetailProps = {
  questionId: string;
};

export const FaqDetail = ({ questionId }: FaqDetailProps) => {
  const content = FAQ_CONTENT[questionId] ?? FAQ_CONTENT.other;

  return (
    <View style={styles.scrollContent}>
      <View style={styles.block}>
        <CustomText
          value={content.question}
          variant="semibold"
          fontSize={14}
          color={palette.textPrimary}
          customTextStyle={styles.question}
        />
        <CustomText
          value={content.answer}
          variant="medium"
          fontSize={14}
          color={palette.textSecondary}
          customTextStyle={styles.answerText}
        />
      </View>
    </View>
  );
};
