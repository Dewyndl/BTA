import { RootNavigator } from './navigations';
import { AppProvider } from './providers';

const isStorybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

export default function App() {
  if (isStorybookEnabled) {
    const StorybookUI = require('../.rnstorybook').default;
    return <StorybookUI />;
  }

  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
