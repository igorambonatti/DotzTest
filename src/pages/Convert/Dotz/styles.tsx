import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Form } from '@unform/mobile'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Body = styled.View`
  width: 100%;
  align-items: center;
`
export const Footer = styled.View`
  margin-top: 30%;
`
export const Converter = styled.View`
  width: 80%;
`
export const FormConvert = styled(Form)``
export const Icon = styled(FontAwesome)`
  transform: rotate(90deg);
  margin: 20px 0px;
`
export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  margin: 15px 0px;
`
