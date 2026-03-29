import React from 'react'
import { ScrollView, View } from 'react-native'
import { AppointmentsList } from '../AppointmentsList'

export const AppointmentArchive = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false} keyboardShouldPersistTaps="handled">
        <AppointmentsList isArchive={false} showArchived={true} limit={12} />
    </ScrollView>
  )
}
