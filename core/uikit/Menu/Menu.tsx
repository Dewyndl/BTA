import React from 'react'
import { View } from 'react-native'
import { menuStyle } from './styles'
import { menuData } from './datas'
import { MenuItem } from '../MenuItem'
import { flexbox } from '../../design'

export const Menu = () => {
  return (
    <View style={[menuStyle.container, flexbox.justifyBetween, flexbox.directionRow, flexbox.wrap]}>
        {
            menuData.map((item, idx) => (
                <MenuItem key={idx} {...item} />
            ))
        }
    </View>
  )
}
