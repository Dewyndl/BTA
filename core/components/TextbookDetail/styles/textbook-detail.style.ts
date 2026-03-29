import { StyleSheet } from 'react-native';

export const textbookDetailStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  titleWrapper: {
    marginBottom: 16,
  },
  imageWrapper: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#E8E8E8',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 10,
  },
  body: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#424242',
    lineHeight: 22,
    textAlign: 'left',
  },
});
