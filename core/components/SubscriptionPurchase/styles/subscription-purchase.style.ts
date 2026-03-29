import { StyleSheet } from 'react-native';

export const subscriptionPurchaseStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
  },
  infoText: {
    marginBottom: 24,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  planCardSelected: {
    borderColor: '#1F7876',
    borderWidth: 2,
  },
  planIcon: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 24,
  },
  planContent: {
    flex: 1,
  },
  planBadge: {
    marginTop: 4,
  },
  paymentInstruction: {
    marginTop: 8,
    marginBottom: 16,
  },
  paymentIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  paymentIcon: {
    width: 48,
    height: 32,
    resizeMode: 'contain',
  },
  totalRow: {
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
  buttonDisabled: {
    opacity: 0.6,
    backgroundColor: '#9E9E9E',
  },
  errorText: {
    marginVertical: 24,
    textAlign: 'center',
  },
  successIcon: {
    alignItems: 'center',
    marginBottom: 16,
  },
  successTitle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  successDate: {
    textAlign: 'center',
    marginBottom: 24,
  },
});
