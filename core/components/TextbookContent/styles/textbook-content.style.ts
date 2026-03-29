import { StyleSheet } from 'react-native';

export const textbookContentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchRow: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  searchWrapper: {
    flex: 1,
    position: 'relative',
    borderRadius: 64,
    borderWidth: 1,
    borderColor: '#979797',
    backgroundColor: '#FFF',
  },
  searchInput: {
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingRight: 48,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#222221',
  },
  searchIcon: {
    position: 'absolute',
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  sortRow: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sortSelect: {
    minWidth: 160,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  gridRow: {
    justifyContent: 'space-between',
    gap: 12,
  },
  gridItem: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#56B5B3',
  },
  cardList: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  listTextWrapper: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  imageWrapper: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 6,
    
    height: 84
  },
  imageWrapperList: {
    width: 100,
    aspectRatio: 1,
    minHeight: 80,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});
