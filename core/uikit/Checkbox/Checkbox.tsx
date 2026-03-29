import React from 'react'
import { Pressable, View } from 'react-native'
import { ICheckboxProps } from './interfaces'
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import { CheckboxIcon } from '../../../assets'
import { checkboxStyles } from './styles'
import { flexbox } from '../../design'

export const Checkbox = ({
    change,
    checked,
    title
}: ICheckboxProps) => {
    return (
        <Pressable onPress={() => change(!checked)}>
            <View style={[checkboxStyles.container, flexbox.directionRow]}>
                <View style={[checkboxStyles.checkbox, flexbox.alignCenter, flexbox.justifyCenter, checked && checkboxStyles.checkboxActive]}>
                    {
                        checked && <CheckboxIcon />
                    }
                </View>
                <View style={checkboxStyles.text}>
                    <CustomText
                        value={title}
                        variant="medium"
                        fontSize={12}
                        color={palette.textPrimary}
                    />
                </View>
            </View>
        </Pressable>
    )
}
