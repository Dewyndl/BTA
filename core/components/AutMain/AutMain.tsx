import { Image, View } from "react-native"
import { AddUserIcon, IMAGES, PhoneIcon } from "../../../assets"
import { Button } from "../../uikit"
import { aquaGradient, blackGradient, flexbox } from "../../design"
import { authMainStyles } from "./styles"
import { IAuthMainProps } from "./interfaces"
import { useGetAppConfigQuery } from "../../../features"

export const AutMain = ({
  pressLogin,
  pressRegister,
  pressHelp,
}: IAuthMainProps) => {
    useGetAppConfigQuery();
    return (
        <View style={authMainStyles.container}>
            <View style={[authMainStyles.imageContainer, flexbox.alignCenter]}>
                <Image 
                    source={IMAGES.LOGO}
                />
            </View>
            <View style={authMainStyles.buttonContainer}>
                <Button 
                    label="Войти по номеру"
                    Icon={<PhoneIcon />}
                    textColor="#FFF"
                    gradient={aquaGradient}
                    onPress={pressLogin}
                />
                <Button 
                    label="Новый пользователь"
                    Icon={<AddUserIcon />}
                    textColor="#FFF"
                    gradient={blackGradient}
                    onPress={pressRegister}
                />
            </View>
            <View style={[authMainStyles.bottomContainer, flexbox.alignCenter]}>
                <Button 
                    label="Проблемы со входом в приложение?"
                    textColor="#222221"
                    maxWidth={160}
                    textCenter={true}
                    noFillDefaultStyles={true}
                    onPress={pressHelp}
                />
            </View>
        </View>
    )
}