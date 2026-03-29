import React from 'react'
import { MainWrapper } from '../../../wrappers'
import { Home } from '../../../components'
import { ScreenProps } from '../types'

export const HomeScreen = (_: ScreenProps<'Home'>) => {
  return (
    <MainWrapper
      title='BTA Assist'
    >
      <Home />
    </MainWrapper>
  )
}
