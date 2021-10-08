import React, { useCallback, useRef, useState, useEffect } from 'react'
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'

import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/Input'
import { getParity } from '../../../service/parity'
import * as S from './styles'

const BRL: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const [data, setData] = useState()
  const [dotzToConvert, setDotzToConvert] = useState<number>()

  const handleBack = () => {
    navigation.navigate('Home')
  }
  const loadParity = useCallback(async () => {
    try {
      const response = await getParity()
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    loadParity()
  }, [])

  const handleSubmit = () => {
    navigation.navigate('Home')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <>
        <Header title='Converter' onBack={handleBack} />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss()
          }}
        >
          <S.Container>
            <S.Title>
              1 DZ : {data?.dotzToBrl.toLocaleString('pt-BR')} R$
            </S.Title>
            <S.FormConvert ref={formRef} onSubmit={handleSubmit}>
              <S.Body>
                <S.Converter>
                  <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='number-pad'
                    name='dotz'
                    placeholder='Dotz'
                    returnKeyType='next'
                    onChangeText={(value) => {
                      setDotzToConvert(value)
                    }}
                  />
                </S.Converter>
                <S.Icon name='random' size={32} color='#fff' />
                <S.Converter>
                  <Input
                    editable={false}
                    ref={passwordInputRef}
                    keyboardType='number-pad'
                    name='brl'
                    defaultValue={12}
                    placeholder={
                      dotzToConvert
                        ? `R$ ${(dotzToConvert * data?.dotzToBrl).toString()}`
                        : 'Reais'
                    }
                    returnKeyType='send'
                  />
                </S.Converter>
              </S.Body>
              <S.Footer>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Converter
                </Button>
              </S.Footer>
            </S.FormConvert>
          </S.Container>
        </TouchableWithoutFeedback>
      </>
    </KeyboardAvoidingView>
  )
}

export default BRL
