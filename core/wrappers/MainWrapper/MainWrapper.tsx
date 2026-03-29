import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pageStyle } from '../../design';
import { Header } from '../../components';
import { Footer } from '../../components/Footer/Footer';
import type { IMainWrapperProps } from './interfaces';

export const MainWrapper = ({
  title,
  subtitle,
  children,
  back,
  headerRightElement,
  titleColor,
  noScroll,
}: IMainWrapperProps) => {
  return (
    <SafeAreaView style={[pageStyle.page, { flex: 1 }]} edges={['top', 'left', 'right', 'bottom']}>
      <View style={{ flex: 1, justifyContent: 'space-between', minHeight: 0 }}>
        <Header
          title={title}
          subtitle={subtitle}
          backClick={back}
          rightElement={headerRightElement}
          titleColor={titleColor}
        />
        {noScroll ? (
          <View style={{ flex: 1, paddingBottom: 40 }}>
            {children}
          </View>
        ) : (
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        )}
        <Footer />
      </View>
    </SafeAreaView>
  );
};
