import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { CustomText } from '../../uikit';
import { palette } from '../../design';
import { IMAGES } from '../../../assets';
import {
  APP_NAME,
  APP_VERSION,
  ABOUT_LINKS,
  type AboutLinkId,
} from './constants';
import { aboutStyles as styles } from './styles';

type AboutProps = {
  onLinkPress: (linkId: AboutLinkId) => void;
};

export const About = ({ onLinkPress }: AboutProps) => {
  return (
    <View style={styles.scrollContent}>
      <Image source={IMAGES.LOGO} style={styles.logo} resizeMode="cover" />
      <CustomText
        value={APP_NAME}
        variant="bold"
        fontSize={20}
        color={palette.textPrimary}
        customTextStyle={styles.appName}
      />
      <CustomText
        value={APP_VERSION}
        variant="medium"
        fontSize={14}
        color={palette.textSecondary}
        customTextStyle={styles.version}
      />
      {ABOUT_LINKS.map((link) => (
        <Pressable
          key={link.id}
          style={styles.link}
          onPress={() => onLinkPress(link.id)}
        >
          <CustomText value={link.label} variant="medium" fontSize={14} color={palette.textPrimary} />
        </Pressable>
      ))}
    </View>
  );
};
