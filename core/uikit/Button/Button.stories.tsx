import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { fn } from 'storybook/test';

import Button from './Button';

const meta = {
  title: 'UIKit/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'С архивом',
    Icon: <View style={{ width: 20, height: 20, backgroundColor: '#999' }} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    isDisabled: true,
  },
};
