import Svg, { Circle, Defs, FeColorMatrix, FeFlood, Filter, G, Path, FeOffset, FeGaussianBlur, FeBlend, FeComposite } from "react-native-svg"

export const ConfirmPhotoIcon = () => {
    return (
        <Svg width="84" height="84" viewBox="0 0 84 84" fill="none">
            <G filter="url(#filter0_d_300_991)">
                <Circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 67 15)" fill="#009C6A" />
                <Circle cx="25" cy="25" r="25.5" transform="matrix(-1 0 0 1 67 15)" stroke="white" />
            </G>
            <Path d="M33 39.2L40.2259 46.2452C40.6433 46.6522 41.3189 46.6173 41.6922 46.1694L51 35" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <Defs>
                <Filter id="filter0_d_300_991" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse">
                    <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                    <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <FeOffset dy="2" />
                    <FeGaussianBlur stdDeviation="8" />
                    <FeComposite in2="hardAlpha" operator="out" />
                    <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_300_991" />
                    <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_300_991" result="shape" />
                </Filter>
            </Defs>
        </Svg>
    )
}