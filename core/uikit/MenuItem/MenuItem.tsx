import React from 'react'
import { Pressable, View } from 'react-native'
import { menuItemStyles } from './styles'
import { IMenuItemProps } from './interfaces'
import { palette } from '../../design';
import { CustomText } from '../CustomText';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainStackParamList } from '../../../app'
import { flexbox } from '../../design'

export const MenuItem = ({
    title,
    Icon,
    href
}: IMenuItemProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>()
    return (
        <Pressable style={menuItemStyles.container} onPress={() => {
            navigation.navigate(href as never)
        }}>
            <View style={[flexbox.alignCenter, menuItemStyles.box]}>
                <View style={menuItemStyles.icon}>{Icon}</View>
                <CustomText
                    value={title}
                    variant="medium"
                    fontSize={12}
                    color={palette.textPrimary}
                    textAlign="center"
                />
            </View>
        </Pressable>
    )
}
