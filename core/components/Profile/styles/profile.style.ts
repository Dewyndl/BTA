import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const profileStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  nameBlock: {
    marginBottom: 40,
  },
  infoBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  trialBlock: {
    marginBottom: 50,
  },
  contactRow: {
    marginBottom: 12,
    gap: 10,
  },
  clinicBlock: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
  clinicIconWrapper: {
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },
  clinicName: {
    textAlign: 'center',
    marginBottom: 4,
    width: '100%',
  },
  clinicAddress: {
    marginTop: 16,
    width: '100%',
  },
  buttonsRow: {
    gap: 12,
  },
  button: {
    width: '100%',
  },
  buttonEdit: {
    backgroundColor: palette.surfaceDark,
    borderWidth: 1,
    borderColor: palette.surfaceDarkBorder,
  },
  formFields: {
    marginTop: 16,
    gap: 12,
  },
  editButtonsRow: {
    marginTop: 24,
    gap: 12,
  },
});
