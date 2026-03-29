import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../../../uikit';

const STEP_PILL_COLOR = '#89C7B6';
const CARD_BORDER_RADIUS = 12;
const CARD_WIDTH = 280;
const CARD_IMAGE_ASPECT = 1.2;

export const instructionTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 16,
  color: '#424242',
  textAlign: 'center' as const,
};

export const stepPillTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.SEMI_BOLD,
  fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
  fontSize: 16,
  color: '#FFF',
};

export const optionButtonTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
};

export const confirmButtonTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
};

export const injectionIntensityStepStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 20,
    backgroundColor: STEP_PILL_COLOR,
    borderRadius: 20,
  },
  fakePill: {
    width: 30,
  },
  stepPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    
  },
  zonePill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  instruction: {
    marginBottom: 24,
    maxWidth: 256,
    marginHorizontal: 'auto',
  },
  cardsScroll: {
    marginHorizontal: -16,
  },
  cardsContent: {
    paddingHorizontal: 16,
    gap: 16,
    paddingBottom: 24,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: CARD_BORDER_RADIUS,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 380,
    backgroundColor: '#E8E8E8',
  },
  cardButton: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: "-50%" }],
    bottom: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    width: 224,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonSelected: {
    borderColor: STEP_PILL_COLOR,
    backgroundColor: 'rgba(137, 199, 182, 0.15)',
  },
  confirmButton: {
    backgroundColor: '#E8E8E8',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
