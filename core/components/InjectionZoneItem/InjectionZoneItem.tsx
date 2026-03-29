import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit'
import { IInjectionZoneItemProps } from './interfaces'
import { CheckboxIcon } from '../../../assets'
import { injectionZoneItemStyles } from './styles'
import { flexbox } from '../../design'

export const InjectionZoneItem = ({
    imageUrl,
    title,
    isSelected,
    onPress,
}: IInjectionZoneItemProps) => {
    return (
        <Pressable onPress={onPress} style={[injectionZoneItemStyles.container, isSelected && injectionZoneItemStyles.isSelectedContainer]}>
            <View >
                <View>
                    <Image source={imageUrl} width={165} height={120} style={injectionZoneItemStyles.img} />
                    <View></View>
                </View>
                {isSelected && <View style={[injectionZoneItemStyles.checkboxContainer]}>
                    <CheckboxIcon width={8} height={6} color="#fff" />
                </View>}
                <View style={[injectionZoneItemStyles.titleContainer, flexbox.alignCenter, flexbox.justifyCenter, isSelected && injectionZoneItemStyles.isSelectedTitleContainer]}>
                    <CustomText
                        value={title}
                        textStyles={{
                            fontStyle: FontStyleEnum.NORMAL,
                            fontWeight: FontWeightEnum.MEDIUM,
                            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
                            fontSize: 16,
                            color: "#424242",
                            textAlign: 'center',
                        }}
                    />
                </View>
            </View>
        </Pressable>
    )
}
