import { StyleSheet } from 'react-native';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../../uikit/CustomText';
import { CAMERA_HEIGHT } from '../constants';

export const instructionTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
  marginBottom: 12,
  textAlign: 'center' as const,
};

export const overlayInstructionTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#FFF',
  textAlign: 'center' as const,
};

export const permissionButtonTextStyle = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#FFF',
};

export const cameraPhotoPickerStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  permissionContainer: {
    padding: 24,
    gap: 16,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#C3C3C3',
    borderRadius: 12,
  },
  permissionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0E7C7B',
    borderRadius: 8,
  },
  cameraWrapper: {
    width: '100%',
    height: CAMERA_HEIGHT,
    backgroundColor: '#000',
    overflow: 'hidden',
    position: 'relative',
  },
  overlayInstruction: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    zIndex: 1,
  },
  cameraControls: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  shutterButtonDisabled: {
    opacity: 0.5,
  },
  photoWrapper: {
    width: '100%',
    height: CAMERA_HEIGHT,
    backgroundColor: '#000',
    overflow: 'hidden',
    position: 'relative',
  },
  photoWrapperWithBorder: {
    borderWidth: 2,
    borderColor: '#0E7C7B',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 24,
    left: 0,
    width: '100%',
  },
  cancelButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#D7131F',
  },
  confirmButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#0E7C7B',
  },
});
