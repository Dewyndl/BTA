import { StyleSheet } from 'react-native';

export const subscriptionVerificationStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  phoneNumber: {
    textAlign: 'center',
    marginBottom: 32,
  },
  smsMessageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  smsMessageIcon: {
    marginRight: 8,
  },
  smsMessageText: {
    flex: 1,
  },
  codeInput: {
    marginBottom: 24,
  },
  buttonsRow: {
    gap: 12,
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
  buttonSecondary: {
    backgroundColor: '#5A5A5A',
    borderWidth: 1,
    borderColor: '#6A6A6A',
  },
  codeNotReceivedLink: {
    textAlign: 'center',
  },
});
