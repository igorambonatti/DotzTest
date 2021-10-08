import React, { useCallback, useRef } from 'react'
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import * as S from './styles'

const BRL: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const codePaymentRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const handleBack = () => {
    navigation.navigate('Home')
  }

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
        <Header title='Boleto' onBack={handleBack} />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss()
          }}
        >
          <S.Container>
            <S.FormConvert ref={formRef} onSubmit={handleSubmit}>
              <S.Body>
                <S.Icon name='barcode' size={32} color='#fff' />
                <S.Converter>
                  <Input
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='default'
                    name='dotz'
                    placeholder='Código do boleto'
                    returnKeyType='next'
                  />
                </S.Converter>
              </S.Body>
              <S.Footer>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Pagar
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
