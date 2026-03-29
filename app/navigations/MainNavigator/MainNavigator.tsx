import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  ApointmentDetailScreen,
  AppointmentArchiveScreen,
  AppointmentCreateScreen,
  AppointmentScreen,
  BuySubscriptionScreen,
  CalendarEventScreen,
  CalendarScreen,
  EmailNotificationSettingsScreen,
  FollowUpAppointmentScreen,
  FollowUpAppointmentCreateScreen,
  InspectionScreen,
  InspectionCreateScreen,
  ProfileScreen,
  SubscriptionEmailScreen,
  SubscriptionPurchaseScreen,
  NothificationsScreen,
  SettingsScreen,
  NotificationSettingsScreen,
  NotificationTemplatesScreen,
  TextBookScreen,
  TextbookContentScreen,
  TextbookDetailScreen,
  HomeScreen,
  ReminderIntervalsScreen,
  ConfirmationCodeScreen,
  SupportScreen,
  FaqDetailScreen,
  AboutScreen,
  AboutCompanyScreen,
  AccountDeletionScreen,
  CardsScreen,
} from '../../../core';
import { MainStackParamList } from '../..';

const RootStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Appointment" component={AppointmentScreen} />
      <RootStack.Screen name="ApointmentDetail" component={ApointmentDetailScreen} />
      <RootStack.Screen name="AppointmentArchive" component={AppointmentArchiveScreen} />
      <RootStack.Screen name="AppointmentCreate" component={AppointmentCreateScreen} />
      <RootStack.Screen name="Inspection" component={InspectionScreen} />
      <RootStack.Screen name="InspectionCreate" component={InspectionCreateScreen} />
      <RootStack.Screen name="FollowUpAppointment" component={FollowUpAppointmentScreen} />
      <RootStack.Screen name="FollowUpAppointmentCreate" component={FollowUpAppointmentCreateScreen} />
      <RootStack.Screen name="Calendar" component={CalendarScreen} />
      <RootStack.Screen name="CalendarEvent" component={CalendarEventScreen} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
      <RootStack.Screen name="BuySubscription" component={BuySubscriptionScreen} />
      <RootStack.Screen name="SubscriptionEmail" component={SubscriptionEmailScreen} />
      <RootStack.Screen name="SubscriptionPurchase" component={SubscriptionPurchaseScreen} />
      <RootStack.Screen name="Nothifications" component={NothificationsScreen} />
      <RootStack.Screen name="Settings" component={SettingsScreen} />
      <RootStack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <RootStack.Screen name="EmailNotificationSettings" component={EmailNotificationSettingsScreen} />
      <RootStack.Screen name="NotificationTemplates" component={NotificationTemplatesScreen} />
      <RootStack.Screen name="TextBook" component={TextBookScreen} />
      <RootStack.Screen name="TextbookContent" component={TextbookContentScreen} />
      <RootStack.Screen name="TextbookDetail" component={TextbookDetailScreen} />
      <RootStack.Screen name="ReminderIntervals" component={ReminderIntervalsScreen} />
      <RootStack.Screen name="ConfirmationCode" component={ConfirmationCodeScreen} />
      <RootStack.Screen name="Support" component={SupportScreen} />
      <RootStack.Screen name="FaqDetail" component={FaqDetailScreen} />
      <RootStack.Screen name="About" component={AboutScreen} />
      <RootStack.Screen name="AboutCompany" component={AboutCompanyScreen} />
      <RootStack.Screen name="AccountDeletion" component={AccountDeletionScreen} />
      <RootStack.Screen name="Cards" component={CardsScreen} />
    </RootStack.Navigator>
  )
};