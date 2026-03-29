import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, CustomText, Select } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { AlarmClockIcon, CheckIcon, WarningIcon } from '../../../assets';
import { aquaGradient, flexbox } from '../../design';
import type { INotification } from '../../../features';
import { notificationsFaker } from '../../../features';
import { notificationsStyles } from './styles';
import type { MainStackParamList } from '../../../app/navigations/MainNavigator/types/main-stack-param-list.type';

const FILTER_OPTIONS = [
  { label: 'Новые', value: 'new' },
  { label: 'Старые', value: 'old' },
  { label: 'Только приемы', value: 'appointments' },
  { label: 'Только системные', value: 'system' },
  { label: 'Мероприятия и заметки', value: 'events' },
];

const getNotificationIcon = (item: INotification) => {
  if (item.type === 'system_warning') {
    return <WarningIcon size={22} color="#F5A623" />;
  }
  if (item.type === 'patient_reminder') {
    return <AlarmClockIcon size={22} color="#12C089" />;
  }
  if (item.type === 'follow_up' && item.status) {
    return <CheckIcon size={20} color="#0E7C7B" />;
  }
  return <AlarmClockIcon size={22} color="#9E9E9E" />;
};

type NotificationCardProps = {
  item: INotification;
  navigate: NativeStackNavigationProp<MainStackParamList>['navigate'];
};

const NotificationCard = ({ item, navigate }: NotificationCardProps) => {
  const renderText = () => {
    if (!item.boldPart || !item.text.includes(item.boldPart)) {
      return (
        <Text style={notificationsStyles.cardText}>
          {item.text}
          {item.boldPart && (
            <Text style={notificationsStyles.cardTextBold}> {item.boldPart}</Text>
          )}
        </Text>
      );
    }
    const [before, after] = item.text.split(item.boldPart);
    return (
      <Text style={notificationsStyles.cardText}>
        {before}
        <Text style={notificationsStyles.cardTextBold}>{item.boldPart}</Text>
        {after}
      </Text>
    );
  };

  return (
    <View
      style={[
        notificationsStyles.card,
        item.isHighlighted && notificationsStyles.cardHighlighted,
      ]}
    >
      <View style={[flexbox.basic, flexbox.directionRow, flexbox.justifyBetween, notificationsStyles.cardHeader]}>
        <CustomText
          value={item.timestamp}
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 12,
            color: '#838383',
          }}
        />
        <View style={notificationsStyles.iconWrapper}>
          {getNotificationIcon(item)}
        </View>
      </View>

      <View style={notificationsStyles.cardBody}>
        {renderText()}

        {item.action && (item.action.left || item.action.right) && (
          <View style={[flexbox.basic, flexbox.directionRow, flexbox.justifyBetween, notificationsStyles.actionsRow]}>
            {item.action.left && (
              <Pressable onPress={item.action.left.label === 'Настроить шаблон' ? () => navigate('NotificationTemplates') : () => {}}>
                <CustomText
                  value={item.action.left.label}
                  textStyles={{
                    fontStyle: FontStyleEnum.NORMAL,
                    fontWeight: FontWeightEnum.MEDIUM,
                    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                    fontSize: 14,
                    color: '#222221',
                    textDecorationLine: 'underline',
                  }}
                />
              </Pressable>
            )}
            {item.action.right && (
              <Pressable onPress={() => Alert.alert('В разработке')}>
                <CustomText
                  value={item.action.right.label}
                  textStyles={{
                    fontStyle: FontStyleEnum.NORMAL,
                    fontWeight: FontWeightEnum.MEDIUM,
                    fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                    fontSize: 14,
                    color: '#0E7C7B',
                    textDecorationLine: 'underline',
                  }}
                />
              </Pressable>
            )}
          </View>
        )}

        {item.status && (
          <View style={[flexbox.basic, flexbox.directionRow, flexbox.alignCenter, notificationsStyles.statusRow]}>
            <CheckIcon size={18} color="#0E7C7B" />
            <CustomText
              value={item.status}
              textStyles={{
                fontStyle: FontStyleEnum.NORMAL,
                fontWeight: FontWeightEnum.MEDIUM,
                fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                fontSize: 12,
                color: '#0E7C7B',
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const applyFilter = (items: INotification[], filter: string): INotification[] => {
  if (filter === 'appointments') return items.filter((n) => n.type === 'appointment');
  if (filter === 'system') return items.filter((n) => n.type === 'system_warning');
  if (filter === 'events') return items.filter((n) => n.type === 'note' || n.type === 'follow_up');
  if (filter === 'old') return [...items].reverse();
  return items;
};

export const Notifications = () => {
  const [filter, setFilter] = useState('new');
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const filteredNotifications = applyFilter(notificationsFaker, filter);

  return (
    <View style={notificationsStyles.container}>
      <View style={[flexbox.basic, flexbox.directionRow, flexbox.alignCenter, flexbox.justifyBetween, notificationsStyles.filterRow]}>
        <Select
          options={FILTER_OPTIONS}
          value={filter}
          onChange={setFilter}
          placeholder="Новые"
          containerStyle={notificationsStyles.filterSelect}
        />
        <Pressable onPress={() => navigation.navigate('NotificationSettings')} hitSlop={12}>
          <CustomText
            value="Настройки уведомлений"
            textStyles={{
              fontStyle: FontStyleEnum.NORMAL,
              fontWeight: FontWeightEnum.MEDIUM,
              fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
              fontSize: 14,
              color: '#0E7C7B',
            }}
          />
        </Pressable>
      </View>

      <ScrollView
        style={notificationsStyles.scrollView}
        contentContainerStyle={notificationsStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredNotifications.map((item) => (
          <NotificationCard key={item.id} item={item} navigate={navigation.navigate} />
        ))}
      </ScrollView>

      <View style={notificationsStyles.bottomButtonRow}>
        <Button
          label="Уведомить всех"
          onPress={() => Alert.alert('В разработке')}
          gradient={aquaGradient}
          textColor="#FFF"
          textCenter
        />
      </View>
    </View>
  );
};
