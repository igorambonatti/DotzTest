import React, { useState, useEffect, useCallback } from 'react'
import { ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { getExtract } from '../../service/extract'
import * as S from './styles'

const Extract: React.FC = () => {
  const [selected, setSelected] = useState<number>(0)
  const [data, setData] = useState()
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.navigate('Home')
  }
  const loadExtract = useCallback(async () => {
    try {
      const response = await getExtract()
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    loadExtract()
  }, [])

  if (!data) return <Loader />

  return (
    <>
      <S.Container>
        <Header title='Extrato' onBack={handleBack} />
        <S.Top>
          <S.ButtonSelectedLeft
            onPress={() => setSelected(0)}
            selected={selected === 0}
          >
            <S.ButtonText>DOTZ</S.ButtonText>
          </S.ButtonSelectedLeft>
          <S.ButtonSelectedRight
            onPress={() => setSelected(1)}
            selected={selected === 1}
          >
            <S.ButtonText>REAIS</S.ButtonText>
          </S.ButtonSelectedRight>
        </S.Top>
        <ScrollView keyboardShouldPersistTaps='handled'>
          <S.Body>
            <S.Head>
              <S.Title>Histórico de movimentações</S.Title>
            </S.Head>
            {selected === 0 &&
              data?.dotz?.map((item, index) => {
                return (
                  <S.ExtractCard key={index}>
                    <S.Transaction>
                      <S.Type>{item.type === 'buy' ? '+' : '-'}</S.Type>
                      <S.Value>
                        {item.quantity.toLocaleString('pt-BR')} DZ
                      </S.Value>
                    </S.Transaction>
                    <S.Date>{item.date}</S.Date>
                  </S.ExtractCard>
                )
              })}
            {selected === 1 &&
              data?.brl?.map((item, index) => {
                return (
                  <S.ExtractCard key={index}>
                    <S.Transaction>
                      <S.Type>{item.type === 'buy' ? '+' : '-'}</S.Type>
                      <S.Value>
                        {item.quantity.toLocaleString('pt-BR')} R$
                      </S.Value>
                    </S.Transaction>
                    <S.Date>{item.date}</S.Date>
                  </S.ExtractCard>
                )
              })}
          </S.Body>
        </ScrollView>
      </S.Container>
    </>
  )
}

export default Extract
