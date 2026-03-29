import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { ISvgProps } from "./interfaces";

export const CheckboxIcon = ({ width = 14, height = 11, color = '#009C6A' }: ISvgProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 14 11" fill="none">
            <Path d="M0.739014 3.74521L5.25337 8.6969C5.67759 9.16221 6.42112 9.12438 6.79591 8.6184L12.739 0.595215" stroke={color} strokeWidth="2" />
        </Svg>
    )
}
