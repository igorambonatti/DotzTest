import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Body, Header as HeaderNB, Left, Right } from 'native-base'

import * as S from './styles'

export interface HeaderProps {
  title?: string
  onBack?: () => void
}

const Header: React.FC<HeaderProps> = ({ onBack, title, ...rest }) => {
  return (
    <S.Container
      androidStatusBarColor='#FFF'
      iosBarStyle='dark-content'
      noShadow
      {...rest}
      testID={'container'}
    >
      <Left>
        <S.BackButton onPress={onBack}>
          <FontAwesome name='angle-left' size={36} color='#fff' />
        </S.BackButton>
      </Left>
      <Body
        style={{
          flex: Platform.OS !== 'ios' ? 6 : 1,
          alignItems: 'center',
          left: Platform.OS !== 'ios' ? 20 : 0,
        }}
      >
        <S.Title>{title}</S.Title>
      </Body>
      <Right />
    </S.Container>
  )
}

export default Header
