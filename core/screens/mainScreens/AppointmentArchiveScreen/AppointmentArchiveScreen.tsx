import React from 'react'
import { AppointmentArchive } from '../../../components'
import { MainWrapper } from '../../../wrappers'
import { ScreenProps } from '../types'

export const AppointmentArchiveScreen = ({
  navigation
}: ScreenProps<'AppointmentArchive'>) => {
  return (
    <MainWrapper
      title='Архив'
      back={() => {
        navigation.goBack()
      }}
    >
      <AppointmentArchive />
    </MainWrapper>
  )
}
