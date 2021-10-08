import { SafeAreaView } from 'react-native'

import styled, { css } from 'styled-components/native'
interface ButtonProps {
  selected: boolean
}

export const Container = styled(SafeAreaView).attrs(props => ({
  paddingTop: Platform.OS === 'android' ? 25 : 0
}))``


export const ExtractCard = styled.View`
  margin: 20px 0px;
  height: 100px;
  background-color: #fff;
  flex-direction: row;
  /* align-items: baseline; */
`
export const Transaction = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 12px;
`
export const Type = styled.Text`
  font-weight: bold;
  font-size: 36px;
  margin-right: 4px;
`
export const Value = styled.Text`
  font-weight: bold;
  color: #f56700;
  font-size: 36px;
`
export const Date = styled.Text`
  font-size: 18px;
  margin: auto 12px 12px auto;
  color: #bfbfbe;
`

export const Body = styled.View`
  margin-top: 20%;
  padding-bottom: 200px;
`
export const Head = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  margin: 0 12px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const Top = styled.View`
  flex-direction: row;
  margin: 0 12px;
`
export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const ButtonSelectedLeft = styled.TouchableOpacity<ButtonProps>`
  background: #f56700;
  justify-content: center;
  align-items: center;
  border: 0;
  color: #ffff;
  font-weight: 500;
  margin-top: 35px;
  padding: 0 16px;
  width: 50%;
  height: 56px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  ${(props: ButtonProps) =>
    props.selected &&
    css`
      background: #fff;
      color: #f56700;
    `}
`
export const ButtonSelectedRight = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  background: #f56700;
  border: 0;
  color: #ffff;
  font-weight: 500;
  margin-top: 35px;
  padding: 0 16px;
  width: 50%;
  height: 56px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  ${(props: ButtonProps) =>
    props.selected &&
    css`
      background: #fff;
      color: #f56700;
    `}
`
