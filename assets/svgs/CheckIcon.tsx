import React from 'react';
import Svg, { Path } from 'react-native-svg';

type CheckIconProps = {
  size?: number;
  color?: string;
};

export const CheckIcon = ({ size = 20, color = '#0E7C7B' }: CheckIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12L10 17L19 8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
