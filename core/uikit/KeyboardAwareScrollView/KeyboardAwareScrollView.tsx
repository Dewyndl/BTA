import React, { forwardRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  type ScrollViewProps,
} from 'react-native';

type KeyboardAwareScrollViewProps = ScrollViewProps & {
  keyboardVerticalOffset?: number;
};

const DEFAULT_KEYBOARD_OFFSET = Platform.OS === 'ios' ? 88 : 0;

export const KeyboardAwareScrollView = forwardRef<ScrollView, KeyboardAwareScrollViewProps>(
  (
    {
      children,
      style,
      contentContainerStyle,
      keyboardVerticalOffset = DEFAULT_KEYBOARD_OFFSET,
      showsVerticalScrollIndicator = false,
      bounces = false,
      keyboardShouldPersistTaps = 'handled',
      ...scrollViewProps
    },
    ref
  ) => {
    return (
      <KeyboardAvoidingView
        style={[styles.container, style]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <ScrollView
          ref={ref}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          bounces={bounces}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          contentContainerStyle={contentContainerStyle}
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
);

KeyboardAwareScrollView.displayName = 'KeyboardAwareScrollView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    minHeight: 0,
  },
});
