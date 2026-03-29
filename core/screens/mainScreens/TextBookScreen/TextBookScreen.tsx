import React from 'react'
import { ScreenProps } from '../types'
import { MainWrapper } from '../../../wrappers'
import { TextBook } from '../../../components'

export const TextBookScreen = ({
  navigation
}: ScreenProps<'TextBook'>) => {
  return (
    <MainWrapper
      title='Картотека'
      back={() => {
        navigation.goBack()
      }}
      noScroll
    >
      <TextBook />
    </MainWrapper>
  )
}
