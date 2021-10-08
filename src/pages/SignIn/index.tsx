import React, { useCallback, useRef } from 'react'
import {
  Alert,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { useDispatch } from 'react-redux'

import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { authRequestAction } from '../../store/auth/actions'
import { startLoader, stopLoader } from '../../store/loader/actions'
import getErros from '../../utils/getErros'
import SignInValidation from '../../utils/validations/loginValidations'
import * as S from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        await SignInValidation.validate(data, {
          abortEarly: false,
        })
        dispatch(startLoader())
        let response = await auth().signInWithEmailAndPassword(
          data.email,
          data.password,
        )
        if (response && response.user) {
          const object = response.user._user
          Alert.alert('Login realizado com Sucesso', 'Seja BEM VINDO!✅')
          dispatch(
            authRequestAction({
              email: object.email,
              token: object.refreshToken,
            }),
          )
          dispatch(stopLoader())
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getErros(err)
          formRef.current?.setErrors(error)

          return
        }
        console.log(err)
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais',
        )
      } finally {
        dispatch(stopLoader())
      }
    },
    [dispatch],
  )

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
          <S.Title>Entre na sua conta Dotz</S.Title>
          <Form ref={formRef} onSubmit={handleSignIn}>
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
              Entrar
            </Button>
          </Form>
          <S.CreateAccount
            onPress={() => {
              navigation.navigate('SignUp')
            }}
          >
            <S.CreateAccountText>criar conta</S.CreateAccountText>
          </S.CreateAccount>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignIn
