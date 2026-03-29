import React from 'react';
import Svg, { Path } from 'react-native-svg';

type PlayIconProps = {
  size?: number;
  color?: string;
};

export const PlayIcon = ({ size = 48, color = 'white' }: PlayIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <Path
      d="M16 12V36L36 24L16 12Z"
      fill={color}
      fillOpacity={0.9}
    />
  </Svg>
);
