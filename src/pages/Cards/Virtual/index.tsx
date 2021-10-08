import React from 'react'
import { CardView } from 'react-native-credit-card-input-view'

import { useNavigation } from '@react-navigation/native'

import Button from '../../../components/Button'
import Header from '../../../components/Header'
import * as S from './styles'

const Virtual: React.FC = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('Home')
  }

  return (
    <>
      <Header title='Virtual' onBack={handleBack} />
      <S.Container>
        <S.Head>
          <S.CardButton>
            <S.Icon name='trash-o' size={32} color='#fff' />
            <S.Title>Excluir Cartão</S.Title>
          </S.CardButton>
          <S.CardButton>
            <S.Icon name='lock' size={32} color='#fff' />
            <S.Title>Bloquear Cartão</S.Title>
          </S.CardButton>
        </S.Head>
        <CardView
          number='4410235123791414'
          cvc='121'
          expiry='12/25'
          brand='visa'
          name='Igor Ambonatti'
          display={true}
          flipDirection='h'
        />
        <S.Footer>
          <Button
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            Voltar
          </Button>
        </S.Footer>
      </S.Container>
    </>
  )
}

export default Virtual
