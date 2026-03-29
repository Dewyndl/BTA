import React from 'react';
import { Pressable, View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../../uikit';
import { SUPPORT_FAQ_TITLE, SUPPORT_FAQ_ITEMS, type SupportFaqItem } from './constants';
import { supportStyles as styles } from './styles';

type SupportProps = {
  onFaqPress: (questionId: string) => void;
};

export const Support = ({ onFaqPress }: SupportProps) => {
  const renderItem = (item: SupportFaqItem, index: number) => (
    <React.Fragment key={item.id}>
      {index > 0 && <View style={styles.divider} />}
      <Pressable style={styles.item} onPress={() => onFaqPress(item.id)}>
        <CustomText value={item.label} variant="medium" fontSize={14} color={palette.textSecondary} />
      </Pressable>
    </React.Fragment>
  );

  return (
    <View style={styles.scrollContent}>
      <View style={styles.sectionTitle}>
        <CustomText value={SUPPORT_FAQ_TITLE} variant="semibold" fontSize={14} color={palette.textPrimary} />
        <View style={styles.titleGap} />
        <CustomText value="?" variant="medium" fontSize={12} color={palette.textSecondary} />
      </View>
      <View style={styles.list}>
        {SUPPORT_FAQ_ITEMS.map((item, index) => renderItem(item, index))}
      </View>
    </View>
  );
};
