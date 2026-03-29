import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

type PhoneIconTealProps = {
  size?: number;
  color?: string;
};

export const PhoneIconTeal = ({ size = 16, color = '#56B5B3' }: PhoneIconTealProps) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_270_410)">
      <Path d="M8 0C3.58867 0 0 3.58867 0 8C0 12.4113 3.58867 16 8 16C12.4113 16 16 12.4113 16 8C16 3.58867 12.4113 0 8 0ZM5.90467 12C5.42267 12 4.93867 11.826 4.57133 11.458L4.22333 11.058C3.926 10.7607 3.926 10.278 4.22333 9.98067L5.09133 9.314C5.38867 9.01667 5.87133 9.01667 6.16867 9.314L6.88133 9.88133C8.262 9.354 9.28067 8.37733 9.88133 6.88133L9.314 6.16867C9.01667 5.87133 9.01667 5.38867 9.314 5.09133L9.98067 4.22333C10.278 3.926 10.7607 3.926 11.058 4.22333L11.458 4.57133C11.826 4.93867 12 5.42267 12 5.90467C12 8.57133 8.38067 12 5.90467 12Z" fill={color} />
    </G>
    <Defs>
      <ClipPath id="clip0_270_410">
        <Rect width="16" height="16" fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
