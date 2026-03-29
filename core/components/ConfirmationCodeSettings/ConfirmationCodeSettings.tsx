import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { palette } from '../../design';
import { CustomText } from '../../uikit';
import SlideBtn from '../../uikit/SlideBtn/SlideBtn';
import {
  CONFIRMATION_CODE_TITLE,
  CONFIRMATION_CODE_SUBTITLE,
} from './constants';
import { confirmationCodeSettingsStyles as styles } from './styles';
import { selectUsers } from '../../../features/store/entities/user/user.slice';

const KEYS = {
  telegram: '@bta/confirm_telegram',
  whatsApp: '@bta/confirm_whatsapp',
  sms: '@bta/confirm_sms',
  email: '@bta/confirm_email',
};

export const ConfirmationCodeSettings = () => {
  const currentUser = useSelector(selectUsers).currentUser;
  const [telegram, setTelegram] = useState(true);
  const [whatsApp, setWhatsApp] = useState(false);
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);

  useEffect(() => {
    AsyncStorage.multiGet([KEYS.telegram, KEYS.whatsApp, KEYS.sms, KEYS.email])
      .then(pairs => {
        const map = Object.fromEntries(pairs.map(([k, v]) => [k, v]));
        if (map[KEYS.telegram] !== null) setTelegram(map[KEYS.telegram] === 'true');
        if (map[KEYS.whatsApp] !== null) setWhatsApp(map[KEYS.whatsApp] === 'true');
        if (map[KEYS.sms] !== null) setSms(map[KEYS.sms] === 'true');
        if (map[KEYS.email] !== null) setEmail(map[KEYS.email] === 'true');
      });
  }, []);

  const handleTelegramChange = (v: boolean) => {
    setTelegram(v);
    AsyncStorage.setItem(KEYS.telegram, v ? 'true' : 'false');
  };

  const handleWhatsAppChange = (v: boolean) => {
    setWhatsApp(v);
    AsyncStorage.setItem(KEYS.whatsApp, v ? 'true' : 'false');
  };

  const handleSmsChange = (v: boolean) => {
    setSms(v);
    AsyncStorage.setItem(KEYS.sms, v ? 'true' : 'false');
  };

  const handleEmailChange = (v: boolean) => {
    setEmail(v);
    AsyncStorage.setItem(KEYS.email, v ? 'true' : 'false');
  };

  return (
    <View style={styles.scrollContent}>
      <CustomText value={CONFIRMATION_CODE_TITLE} variant="semibold" fontSize={14} color={palette.textPrimary} />
      <View style={styles.subtitleBlock}>
        <CustomText value={CONFIRMATION_CODE_SUBTITLE} variant="medium" fontSize={12} color={palette.textSecondary} />
      </View>
      <View style={styles.phoneBlock}>
        <CustomText value={currentUser?.u_phone ?? ''} variant="medium" fontSize={14} color={palette.primary} />
      </View>

      <View style={styles.section}>
        <SlideBtn
          title="Telegram"
          checked={telegram}
          onValueChange={handleTelegramChange}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="WhatsApp"
          checked={whatsApp}
          onValueChange={handleWhatsAppChange}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="SMS"
          checked={sms}
          onValueChange={handleSmsChange}
        />
        <View style={styles.divider} />
        <SlideBtn
          title="Email"
          description={currentUser?.u_email ?? ''}
          checked={email}
          onValueChange={handleEmailChange}
        />
      </View>
    </View>
  );
};
