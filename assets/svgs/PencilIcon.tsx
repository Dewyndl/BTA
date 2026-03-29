import React from 'react';
import Svg, { Path } from 'react-native-svg';

type PencilIconProps = {
  size?: number;
  color?: string;
};

export const PencilIcon = ({ size = 20, color = 'white' }: PencilIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 19L19 12L22 15L15 22L12 19Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 13L19 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M3 21L4 17L17 4L20 7L7 20L3 21Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
