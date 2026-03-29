import React from 'react'
import { ScreenProps } from '../types'
import { MainWrapper } from '../../../wrappers'
import { Injection } from '../../../components'

export const InspectionScreen = ({
  navigation
}: ScreenProps<'Inspection'>) => {
  return (
    <MainWrapper
      title='Осмотр / коррекция'
      back={() => {
        navigation.goBack()
      }}
    >
      <Injection />
    </MainWrapper>
  )
}
