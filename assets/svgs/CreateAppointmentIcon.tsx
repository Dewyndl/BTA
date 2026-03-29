import React from 'react'
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg'

export const CreateAppointmentIcon = () => {
    return (
        <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" >
            <G clipPath="url(#clip0_235_152)">
                <Path d="M24.9167 11.9165H22.75V9.74982C22.75 9.15152 22.265 8.6665 21.6667 8.6665C21.0684 8.6665 20.5834 9.15152 20.5834 9.74982V11.9165H18.4167C17.8184 11.9165 17.3334 12.4015 17.3334 12.9998C17.3334 13.5981 17.8184 14.0831 18.4167 14.0831H20.5834V16.2498C20.5834 16.8481 21.0684 17.3331 21.6667 17.3331C22.265 17.3331 22.75 16.8481 22.75 16.2498V14.0831H24.9167C25.515 14.0831 26 13.5981 26 12.9998C26 12.4015 25.515 11.9165 24.9167 11.9165Z" fill="url(#paint0_linear_235_152)" />
                <Path d="M9.75 13C13.3399 13 16.25 10.0899 16.25 6.5C16.25 2.91015 13.3399 0 9.75 0C6.16015 0 3.25 2.91015 3.25 6.5C3.25 10.0899 6.16015 13 9.75 13Z" fill="url(#paint1_linear_235_152)" />
                <Path d="M9.75 15.1665C4.3677 15.1725 0.00599219 19.5342 0 24.9165C0 25.5148 0.485012 25.9998 1.08332 25.9998H18.4166C19.0149 25.9998 19.4999 25.5148 19.4999 24.9165C19.494 19.5342 15.1323 15.1724 9.75 15.1665Z" fill="url(#paint2_linear_235_152)" />
            </G>
            <Defs>
                <LinearGradient id="paint0_linear_235_152" x1="21.0377" y1="8.6665" x2="21.0377" y2="17.3331" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#56B5B3" />
                    <Stop offset="1" stopColor="#1F7876" />
                </LinearGradient>
                <LinearGradient id="paint1_linear_235_152" x1="8.80645" y1="0" x2="8.80645" y2="13" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#56B5B3" />
                    <Stop offset="1" stopColor="#1F7876" />
                </LinearGradient>
                    <LinearGradient id="paint2_linear_235_152" x1="8.33466" y1="15.1665" x2="8.33466" y2="25.9998" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#56B5B3" />
                    <Stop offset="1" stopColor="#1F7876" />
                </LinearGradient>
                <ClipPath id="clip0_235_152">
                    <Rect width="26" height="26" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}