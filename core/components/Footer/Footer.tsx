import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { flexbox } from '../../design';
import { Button } from '../../uikit';
import { BellIcon, HomeIcon, SettingsIcon, UserIcon } from '../../../assets';
import { footerStyles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../app';
import { useNavigation } from '@react-navigation/core';

const UNREAD_COUNT = 14;

export const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const BellWithBadge = (
    <View style={badgeStyles.wrapper}>
      <BellIcon />
      {UNREAD_COUNT > 0 && (
        <View style={badgeStyles.badge}>
          <Text style={badgeStyles.badgeText}>
            {UNREAD_COUNT > 99 ? '99+' : UNREAD_COUNT}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <View
      style={[
        flexbox.basic,
        flexbox.directionRow,
        flexbox.alignCenter,
        flexbox.justifyBetween,
        footerStyles.container,
      ]}
    >
      <Button onPress={() => navigation.navigate('Home')} Icon={<HomeIcon />} />
      <Button onPress={() => navigation.navigate('Settings')} Icon={<SettingsIcon />} />
      <Button onPress={() => navigation.navigate('Nothifications')} Icon={BellWithBadge} />
      <Button onPress={() => navigation.navigate('Profile')} Icon={<UserIcon />} />
    </View>
  );
};

const badgeStyles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#D7131F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#FFF',
  },
});
