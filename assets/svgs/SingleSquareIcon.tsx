import React from 'react';
import Svg, { Rect } from 'react-native-svg';

type SingleSquareIconProps = {
  size?: number;
  color?: string;
};

export const SingleSquareIcon = ({ size = 24, color = '#0E7C7B' }: SingleSquareIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <Rect width="32" height="32" rx="10" fill={color} />
  </Svg>
);
