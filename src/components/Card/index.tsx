import React from 'react'
import { View, Text } from 'react-native'
import { ViewProps } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import * as S from './styles'

export interface CardProps extends ViewProps {
  icon: string
  title: string
  onSelect: () => void
}

const Card: React.FC<CardProps> = ({ icon, title, onSelect, ...rest }) => {
  return (
    <S.ButtonSelect onPress={onSelect} testID={'button'}>
      <S.Container {...rest}>
        <S.IconView>
          <FontAwesome name={icon} size={24} color='#fff' />
        </S.IconView>
        <S.Title testID={'title'}>{title}</S.Title>
      </S.Container>
    </S.ButtonSelect>
  )
}

export default Card
