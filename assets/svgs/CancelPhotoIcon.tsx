import Svg, { Circle, Defs, FeComposite, FeColorMatrix, FeFlood, Filter, G, Path, FeOffset, FeGaussianBlur, FeBlend } from "react-native-svg"

export const CancelPhotoIcon = () => {
    return (
        <Svg width="84" height="84" viewBox="0 0 84 84" fill="none">
            <G filter="url(#filter0_d_300_987)">
                <Circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 67 15)" fill="#D7131F" />
                <Circle cx="25" cy="25" r="25.5" transform="matrix(-1 0 0 1 67 15)" stroke="#D7131F" />
            </G>
            <Path d="M34 32.1661L49.9997 48M50 32L34.0003 47.8339" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <Defs>
                <Filter id="filter0_d_300_987" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse">
                    <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                    <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <FeOffset dy="2" />
                    <FeGaussianBlur stdDeviation="8" />
                    <FeComposite in2="hardAlpha" operator="out" />
                    <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_300_987" />
                    <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_300_987" result="shape" />
                </Filter>
            </Defs>
        </Svg>
    )
}