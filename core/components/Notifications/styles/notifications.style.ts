import { StyleSheet } from 'react-native';

export const notificationsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterRow: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  filterSelect: {
    minWidth: 140,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHighlighted: {
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#F5A623',
  },
  cardHeader: {
    marginBottom: 8,
  },
  iconWrapper: {
    marginLeft: 8,
  },
  cardBody: {
    paddingRight: 0,
  },
  cardText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#222221',
    lineHeight: 20,
  },
  cardTextBold: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
  actionsRow: {
    marginTop: 12,
  },
  statusRow: {
    marginTop: 8,
    gap: 8,
  },
  bottomButtonRow: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
