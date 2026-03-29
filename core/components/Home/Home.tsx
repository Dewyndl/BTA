import React from 'react'
import { View } from 'react-native'
import { Menu } from '../../uikit'
import { homeStyles } from './styles'
import { AppointmentsList } from '../AppointmentsList'

export const Home = () => {
  return (
    <View style={homeStyles.container}>
      <Menu />
      <AppointmentsList title='Ближайшие приемы' limit={3} isArchive />
    </View>
  )
}
