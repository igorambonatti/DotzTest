import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #fff;
  border-radius: 10px;
  margin-top: 8px;
`

export const ButtonText = styled.Text`
  color: #f56700;
  font-size: 18px;
  font-weight: bold;
`
