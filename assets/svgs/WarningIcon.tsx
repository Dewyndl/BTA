import React from 'react';
import Svg, { Path } from 'react-native-svg';

type WarningIconProps = {
  size?: number;
  color?: string;
};

export const WarningIcon = ({ size = 24, color = '#F5A623' }: WarningIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3L2 21H22L12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
      fill={color}
      fillOpacity={0.2}
    />
    <Path
      d="M12 9V13M12 17H12.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Svg>
);
