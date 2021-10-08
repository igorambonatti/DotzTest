import React, { useCallback, useRef } from 'react'
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'

import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Input from '../../components/Input'
import getErros from '../../utils/getErros'
import SignInValidation from '../../utils/validations/loginValidations'
import * as S from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignUp = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})

      await SignInValidation.validate(data, {
        abortEarly: false,
      })
      await auth().createUserWithEmailAndPassword(data.email, data.password)
      Alert.alert('Parabéns!', 'Conta criado com sucesso ✅')
      navigation.navigate('SignIn')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getErros(err)
        formRef.current?.setErrors(error)

        return
      }
      if (err.code === 'auth/email-already-in-use') {
        Alert.alert('Esse email já está em uso')
      } else if (err.code === 'auth/invalid-email') {
        Alert.alert('Endereço de email inválido')
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao cadastrar a conta, cheque os dados',
        )
      }
    }
  }, [])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <S.Container>
          <S.Title>Crie sua conta Dotz</S.Title>
          <Form ref={formRef} onSubmit={handleSignUp}>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              name='email'
              placeholder='E-mail'
              returnKeyType='next'
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name='password'
              placeholder='Senha'
              returnKeyType='send'
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <Button onPress={() => formRef.current?.submitForm()}>
              Criar Conta
            </Button>
          </Form>
          <S.CreateAccount
            onPress={() => {
              navigation.navigate('SignIn')
            }}
          >
            <S.CreateAccountText>voltar</S.CreateAccountText>
          </S.CreateAccount>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignUp
