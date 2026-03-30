import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { About } from '../../../components';
import { MainWrapper } from '../../../wrappers';
import type { MainStackParamList } from '../../../../app';
import type { AboutLinkId } from '../../../components';
import { useGetAppConfigQuery } from '../../../../features/store/entities/user/user.rtk';

const PLACEHOLDER_TEXT = 'Текст появится после добавления';

function parseLangVlsBody(langVls: Record<string, unknown> | undefined, key: string): string {
  if (!langVls) return PLACEHOLDER_TEXT;
  const entry = langVls[key] as Record<string, string> | undefined;
  if (!entry) return PLACEHOLDER_TEXT;
  const raw = entry['1'];
  if (!raw) return PLACEHOLDER_TEXT;
  try {
    const parsed = JSON.parse(raw) as { title?: string; body?: string };
    const body = parsed.body ?? '';
    if (!body || body.trim().endsWith('...')) return PLACEHOLDER_TEXT;
    return body;
  } catch {
    return PLACEHOLDER_TEXT;
  }
}

export const AboutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const { data: appConfig } = useGetAppConfigQuery();

  const langVls = (appConfig as any)?.data?.data?.lang_vls as Record<string, unknown> | undefined;

  const handleLinkPress = (linkId: AboutLinkId) => {
    if (linkId === 'company') {
      navigation.navigate('AboutCompany');
    } else if (linkId === 'offer') {
      const body = parseLangVlsBody(langVls, 'e_about_1_oferta');
      navigation.navigate('AboutCompany', { title: 'Публичная оферта', body });
    } else if (linkId === 'privacy') {
      const body = parseLangVlsBody(langVls, 'e_about_2_pkd');
      navigation.navigate('AboutCompany', { title: 'Политика конфиденциальности', body });
    }
  };

  return (
    <MainWrapper title="О приложении" back={() => navigation.goBack()}>
      <About onLinkPress={handleLinkPress} />
    </MainWrapper>
  );
};
