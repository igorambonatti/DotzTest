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
  const [brlToConvert, setBrlToConvert] = useState<number>()

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
              1 R$ : {data?.brlToDotz.toLocaleString('pt-BR')} DZ
            </S.Title>
            <S.FormConvert ref={formRef} onSubmit={handleSubmit}>
              <S.Body>
                <S.Converter>
                  <Input
                    ref={passwordInputRef}
                    keyboardType='number-pad'
                    name='brl'
                    placeholder='Reais'
                    returnKeyType='send'
                    onChangeText={(value) => {
                      setBrlToConvert(value)
                    }}
                  />
                </S.Converter>
                <S.Icon name='random' size={32} color='#fff' />
                <S.Converter>
                  <Input
                    editable={false}
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='number-pad'
                    name='dotz'
                    placeholder={
                      brlToConvert
                        ? `DZ ${(brlToConvert * data?.brlToDotz).toLocaleString(
                            'pt-BR',
                          )}`
                        : 'Dotz'
                    }
                    returnKeyType='next'
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
