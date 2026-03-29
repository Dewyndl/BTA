import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomText } from '../../uikit';
import { palette } from '../../design';
import { SlideBtn } from '../../uikit/SlideBtn';
import { ArrowRightIcon } from '../../../assets';
import { LogoutModal } from '../LogoutModal';
import { SETTINGS_LINKS } from './constants';
import type { ISettingsProps } from './interfaces';
import { settingsStyles } from './styles';
import { useLogoutUserMutation } from '../../../features';

const DARK_THEME_KEY = 'dark_theme';

export const Settings = ({
  onNavigate,
  onLogoutConfirm,
  onDeleteAccount,
}: ISettingsProps) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    AsyncStorage.getItem(DARK_THEME_KEY).then((value) => {
      if (value === 'true') setDarkTheme(true);
    });
  }, []);

  const handleDarkThemeChange = (value: boolean) => {
    setDarkTheme(value);
    AsyncStorage.setItem(DARK_THEME_KEY, String(value));
  };

  const handleLogout = () => setLogoutModalVisible(true);

  const handleLogoutConfirm = () => {
    logoutUser().then(res => {
      setLogoutModalVisible(false);
      onLogoutConfirm?.();
    });
  };

  return (
    <View style={settingsStyles.scrollContent}>
      <View style={settingsStyles.section}>
        {SETTINGS_LINKS.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <View style={settingsStyles.divider} />}
            <Pressable
              style={settingsStyles.linkItem}
              onPress={() => onNavigate(item.href)}
            >
              <CustomText
                value={item.label}
                variant="medium"
                fontSize={18}
                color={item.isHighlight ? palette.primary : palette.textSecondary}
              />
            </Pressable>
          </React.Fragment>
        ))}
      </View>

      <View style={settingsStyles.section}>
        <SlideBtn
          title="Темная тема"
          checked={darkTheme}
          onValueChange={handleDarkThemeChange}
        />
      </View>

      <View style={settingsStyles.section}>
        <Pressable style={settingsStyles.actionRow} onPress={handleLogout}>
          <CustomText
            value="Выйти из аккаунта"
            variant="medium"
            fontSize={14}
            color={palette.error}
          />
          <ArrowRightIcon size={20} color={palette.error} />
        </Pressable>
        <View style={settingsStyles.divider} />
        <Pressable
          style={[settingsStyles.actionRow, settingsStyles.actionRowMuted]}
          onPress={onDeleteAccount}
        >
          <CustomText
            value="Удалить аккаунт"
            variant="medium"
            fontSize={14}
            color={palette.textMuted}
          />
        </Pressable>
      </View>

      <LogoutModal
        isVisible={logoutModalVisible}
        onConfirm={handleLogoutConfirm}
        onCancel={() => setLogoutModalVisible(false)}
      />
    </View>
  );
};
