import { StyleSheet } from 'react-native';

export const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 0,
    borderRadius: 64,
    height: 60,
  },
  pressableReset: {
    padding: 0,
    margin: 0,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    borderRadius: 64,
  },
});