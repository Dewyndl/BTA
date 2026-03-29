import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../../../features';
import { SubscriptionVerificationProvider } from '../../../core';

const styles = StyleSheet.create({
  root: { flex: 1 },
});

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <Provider store={store}>
          <SubscriptionVerificationProvider>
            <NavigationContainer>{children}</NavigationContainer>
          </SubscriptionVerificationProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};