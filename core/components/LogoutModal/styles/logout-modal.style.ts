import { StyleSheet } from 'react-native';
import { palette } from '../../../design';

export const logoutModalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: palette.white,
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 200,
  },
  buttonsContainer: {
    gap: 12,
    width: '100%',
    marginTop: 30,
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  message: {
    textAlign: 'center',
    marginBottom: 24,
  },
  confirmButton: {
    marginBottom: 12,
    alignSelf: 'stretch',
  },
  cancelButton: {
    alignSelf: 'stretch',
    backgroundColor: palette.background,
    borderWidth: 1,
    borderColor: palette.border,
  },
});
