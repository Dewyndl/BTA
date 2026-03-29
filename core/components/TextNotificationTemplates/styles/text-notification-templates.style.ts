import { StyleSheet } from 'react-native';

export const textNotificationTemplatesStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
  },
  templateCard: {
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 16,
  },
  templateCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  templateLabel: {
    flex: 1,
  },
  templateText: {
    minHeight: 80,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#222221',
  },
  templateTextActive: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C3C3C3',
  },
  templateTextError: {
    borderColor: '#D7131F',
  },
  pencilIcon: {
    padding: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#56B5B3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insertVariableLink: {
    marginTop: 8,
    marginBottom: 8,
  },
  charCount: {
    marginBottom: 16,
  },
  insertStandardButton: {
    marginBottom: 24,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#5A5A5A',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginTop: 16,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonCancel: {
    backgroundColor: '#D7131F',
  },
  actionButtonSave: {
    backgroundColor: '#1F7876',
  },
  actionButtonDisabled: {
    backgroundColor: '#9E9E9E',
    opacity: 0.7,
  },
  errorText: {
    marginBottom: 8,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#D7131F',
  },
  formLabel: {
    marginBottom: 8,
  },
  nameInput: {
    height: 48,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#222221',
  },
});
