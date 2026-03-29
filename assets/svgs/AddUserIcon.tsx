import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

export const AddUserIcon = () => {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
            <G clipPath="url(#clip0_221_564)">
                <Path d="M6.75 9C9.23528 9 11.25 6.98528 11.25 4.5C11.25 2.01472 9.23528 0 6.75 0C4.26472 0 2.25 2.01472 2.25 4.5C2.25 6.98528 4.26472 9 6.75 9Z" fill="white" />
                <Path d="M9.78225 10.5H3.71775C2.73211 10.5012 1.78717 10.8933 1.09022 11.5902C0.393264 12.2872 0.00119087 13.2321 0 14.2178L0 18H13.5V14.2178C13.4988 13.2321 13.1067 12.2872 12.4098 11.5902C11.7128 10.8933 10.7679 10.5012 9.78225 10.5Z" fill="white" />
                <Path d="M15.75 7.5V5.25H14.25V7.5H12V9H14.25V11.25H15.75V9H18V7.5H15.75Z" fill="white" />
            </G>
            <Defs>
                <ClipPath id="clip0_221_564">
                    <Rect width="18" height="18" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
