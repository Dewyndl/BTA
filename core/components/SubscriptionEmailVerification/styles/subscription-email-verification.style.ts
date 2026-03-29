import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 60;
const INPUT_BORDER_RADIUS = 64;

export const subscriptionEmailVerificationStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  promptText: {
    marginBottom: 24,
  },
  input: {
    height: INPUT_HEIGHT,
    borderRadius: INPUT_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: '#C3C3C3',
    paddingHorizontal: 20,
    marginBottom: 8,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#222221',
  },
  inputError: {
    borderColor: '#D7131F',
  },
  errorText: {
    marginBottom: 24,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  messageText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  emailDisplay: {
    marginBottom: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
  },
  resendLink: {
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
});
