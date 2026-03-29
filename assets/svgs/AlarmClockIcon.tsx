import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type AlarmClockIconProps = {
  size?: number;
  color?: string;
};

export const AlarmClockIcon = ({ size = 24, color = '#9E9E9E' }: AlarmClockIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="13" r="9" stroke={color} strokeWidth="1.5" fill="none" />
    <Path
      d="M12 8V13L15 16"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
