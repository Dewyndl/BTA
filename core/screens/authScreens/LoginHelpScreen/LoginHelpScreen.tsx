import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette, pageStyle } from '../../../design';
import { Header } from '../../../components';
import { CustomText } from '../../../uikit';
import { LOGIN_HELP_SECTIONS, LOGIN_HELP_TITLE } from './constants/login-help-content.constant';
import type { ILoginHelpScreenProps } from './interfaces';
import { loginHelpScreenStyles as styles } from './styles/login-help-screen.style';

export const LoginHelpScreen = ({ navigation }: ILoginHelpScreenProps) => {
  return (
    <SafeAreaView style={pageStyle.page} edges={['top', 'left', 'right', 'bottom']}>
      <Header
        title={LOGIN_HELP_TITLE}
        backClick={() => navigation.goBack()}
      />
      <View style={pageStyle.flex1}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {LOGIN_HELP_SECTIONS.map((section) => (
            <View key={section.id} style={styles.section}>
              <CustomText
                value={section.title}
                variant="semibold"
                fontSize={14}
                color={palette.textPrimary}
                customTextStyle={styles.sectionTitle}
              />
              <CustomText
                value={section.content}
                variant="medium"
                fontSize={14}
                color={palette.textSecondary}
                customTextStyle={styles.sectionContent}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
