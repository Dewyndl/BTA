import React from 'react';
import Svg, { Rect } from 'react-native-svg';

type FourDotsIconProps = {
  size?: number;
  color?: string;
};

export const FourDotsIcon = ({ size = 24, color = '#0E7C7B' }: FourDotsIconProps) => {
  const s = size / 4;
  const gap = size / 6;
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Rect width="10" height="10" rx="3" fill={color} />
      <Rect y="20" width="10" height="10" rx="3" fill={color} />
      <Rect x="20" y="20" width="10" height="10" rx="3" fill={color} />
      <Rect x="20" width="10" height="10" rx="3" fill={color} />
    </Svg>

  );
};
