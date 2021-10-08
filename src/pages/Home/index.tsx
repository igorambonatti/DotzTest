import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import AnimateNumber from 'react-native-countup'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'

import { useNavigation } from '@react-navigation/native'

import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { getInfos } from '../../service/intialInfos'
import { logoutAction } from '../../store/auth/actions'
import * as S from './styles'

interface InitialData {
  dotzBalance?: number
  brlBalance?: number
}

const Home: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [data, setData] = useState<InitialData>()

  const handleLogout = useCallback(() => {
    Alert.alert('Logout', 'Logout efetuado com sucesso, volte sempre! 😀')
    dispatch(logoutAction())
  }, [])

  const loadInitialInfos = useCallback(async () => {
    try {
      const response = await getInfos()
      setData(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    loadInitialInfos()
  }, [loadInitialInfos])

  if (!data) return <Loader />
  return (
    <>
      <S.Container>
        <ScrollView keyboardShouldPersistTaps='handled'>
          <S.Header>
            <S.Left>
              <S.Title>SALDO</S.Title>
              <S.Balance>
                <AnimateNumber
                  value={data?.dotzBalance}
                  formatter={(val) => {
                    return (
                      <S.BalanceValue>
                        {parseFloat(val).toFixed(0)}
                      </S.BalanceValue>
                    )
                  }}
                />
                <S.BalanceLabel>DZ +</S.BalanceLabel>
              </S.Balance>
              <S.Balance>
                <S.BalanceLabel>R$</S.BalanceLabel>
                <AnimateNumber
                  value={data?.brlBalance}
                  formatter={(val) => {
                    return (
                      <S.BalanceValue>
                        {parseFloat(val).toFixed(0)}
                      </S.BalanceValue>
                    )
                  }}
                />
              </S.Balance>
            </S.Left>
            <S.Right>
              <S.ResumeButton
                onPress={() => {
                  navigation.navigate('Extract')
                }}
              >
                <S.Resume>Ver extrato</S.Resume>
              </S.ResumeButton>
              <S.LogoutButton onPress={handleLogout}>
                <FontAwesome name='sign-in' size={26} color='#fff' />
              </S.LogoutButton>
            </S.Right>
          </S.Header>
          <S.Body>
            <S.Section>
              <S.SectionTitle>Conta Dotz</S.SectionTitle>
              <S.CardsView>
                <Card
                  title={'Converter Dotz em reais'}
                  onSelect={() => {
                    navigation.navigate('Convert-BRL')
                  }}
                  icon={'usd'}
                />
                <Card
                  title={'Depositar Dotz'}
                  onSelect={() => {
                    navigation.navigate('Convert-Dotz')
                  }}
                  icon={'usd'}
                />
              </S.CardsView>
            </S.Section>
            <S.Section>
              <S.SectionTitle>Cartões</S.SectionTitle>
              <S.CardsView>
                <Card
                  title={'Cartão de crédito'}
                  onSelect={() => {
                    navigation.navigate('Credit-Card')
                  }}
                  icon={'cc-visa'}
                />
                <Card
                  title={'Cartão virtual'}
                  onSelect={() => {
                    navigation.navigate('Virtual-Card')
                  }}
                  icon={'credit-card-alt'}
                />
                <Card
                  title={'Cartão físico'}
                  onSelect={() => {
                    navigation.navigate('Physical-Card')
                  }}
                  icon={'cc-visa'}
                />
              </S.CardsView>
            </S.Section>
            <S.Section>
              <S.SectionTitle>Pagamentos</S.SectionTitle>
              <S.CardsView>
                <Card
                  title={'Boleto'}
                  onSelect={() => {
                    navigation.navigate('Payment')
                  }}
                  icon={'barcode'}
                />
              </S.CardsView>
            </S.Section>
          </S.Body>
        </ScrollView>
      </S.Container>
    </>
  )
}

export default Home
