import React from 'react'
import { Pressable, TouchableOpacity, View } from 'react-native'
import { CustomText, FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit'
import { ISelectModalProps } from './interfaces'
import { selectModalStyles } from './styles'

export const SelectModal = ({
    title,
    options,
    directions,
    onPress
}: ISelectModalProps) => {
    return (
        <Pressable onPress={(e) => e.stopPropagation()}>
        <View style={[selectModalStyles.container, {
            top: directions.top,
            left: directions.left
        }]}>
            {title && <CustomText
                value={title}
                textStyles={{
                    fontStyle: FontStyleEnum.NORMAL,
                    fontWeight: FontWeightEnum.SEMI_BOLD,
                    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                    fontSize: 12,
                    color: '#222221'
                }}
            />}
            <View>
                {
                    options.map(option => (
                        <TouchableOpacity key={option.value} onPress={() => {onPress(option.value)}}>
                            <CustomText
                                value={option.label}
                                textStyles={{
                                    fontStyle: FontStyleEnum.NORMAL,
                                    fontWeight: FontWeightEnum.SEMI_BOLD,
                                    fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                                    fontSize: 16,
                                    color: '#222221'
                                }}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
        </Pressable>
    )
}
