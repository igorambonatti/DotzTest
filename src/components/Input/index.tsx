import React, {
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react'
import { TextInputProps, Text } from 'react-native'

import { useField } from '@unform/core'

import * as S from './styles'

export interface InputProps extends TextInputProps {
  name: string
}

interface InputValueReference {
  value?: string
}

interface InputRef {
  focus(): void
}

const Input: React.FC<InputRef, InputProps> = (
  { name, icon, containerStyle = {}, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)

  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <>
      {error && <S.LabelError>{error}</S.LabelError>}
      <S.Container
        style={containerStyle}
        isFocused={isFocused}
        isErrored={!!error}
      >
        <S.TextInput
          testID={'input'}
          ref={inputElementRef}
          keyboardAppearance='dark'
          placeholderTextColor='#fff'
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value
          }}
          {...rest}
        />
      </S.Container>
    </>
  )
}

export default forwardRef(Input)
