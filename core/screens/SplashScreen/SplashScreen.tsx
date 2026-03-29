import { ActivityIndicator, Image, View } from 'react-native';
import { IMAGES } from '../../../assets';

export const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <Image source={IMAGES.LOGO} style={{ width: 200, height: 120, resizeMode: 'contain' }} />
    <ActivityIndicator size="large" color="#1F7876" style={{ marginTop: 32 }} />
  </View>
);
