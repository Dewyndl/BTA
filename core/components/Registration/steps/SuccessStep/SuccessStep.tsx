import { Image, View } from "react-native"
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from "../../../../uikit"
import { useEffect } from "react"
import { flexbox } from "../../../../design"
import { IMAGES } from "../../../../../assets"
import { IStepProps } from "../../interfaces"
import { useDispatch, useSelector } from "react-redux"
import { fillUser, IUser, UserRole, selectUsers, clearPendingCredentials } from "../../../../../features"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const SuccessStep = ({
    allBody,
}: IStepProps) => {

    const dispatch = useDispatch()
    const { pendingToken, pendingUHash } = useSelector(selectUsers)

    const createUser: IUser & { userRole: typeof UserRole.DOCTOR } = {
        u_id: String(allBody.id ?? ''),
        u_name: String(allBody.name ?? ''),
        u_family: String(allBody.lastName ?? ''),
        u_middle: String(allBody.middleName ?? ''),
        u_email: String(allBody.email ?? ''),
        u_phone: String(allBody.phone ?? ''),
        u_role: '2',
        u_a_role: null,
        u_check_state: null,
        u_ban: { auth: null, order: null, blog_topic: null, blog_post: null },
        u_active: 1,
        u_photo: null,
        u_birthday: null,
        u_phone_checked: 0,
        u_lang: null,
        u_currency: null,
        u_city: null,
        u_tips: null,
        u_lang_skills: null,
        u_description: null,
        u_gps_software: null,
        userRole: UserRole.DOCTOR,
    }

    useEffect(() => {
        const flush = async () => {
            if (pendingToken) {
                await AsyncStorage.setItem('token', pendingToken)
            }
            if (pendingUHash) {
                await AsyncStorage.setItem('u_hash', pendingUHash)
            }
            dispatch(clearPendingCredentials())
            dispatch(fillUser(createUser))
        }
        flush()
    }, [])

    return (
        <View>
            <View style={[flexbox.alignCenter]}>
                <Image
                    source={IMAGES.LOGO}
                />
            </View>
            <View>
                <CustomText
                    value="Добро пожаловать,"
                    textStyles={{
                        fontStyle: FontStyleEnum.NORMAL,
                        fontWeight: FontWeightEnum.MEDIUM,
                        fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                        fontSize: 18,
                        color: "#222221",
                        textAlign: 'center'
                    }}
                />
                <CustomText
                    value={`${allBody.name} ${allBody.lastName}`}
                    textStyles={{
                        fontStyle: FontStyleEnum.NORMAL,
                        fontWeight: FontWeightEnum.MEDIUM,
                        fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                        fontSize: 22,
                        color: "#1F7876",
                        textAlign: 'center'
                    }}
                />
            </View>
        </View>
    )
}
