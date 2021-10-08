import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

export interface ButtonProps extends RectButtonProperties {
  children: string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container testID={'button'} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
)

export default Button
