import { SafeAreaView } from 'react-native'

import styled from 'styled-components/native'


export const Header = styled.View`
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`
export const Body = styled.View`
  margin: 12px;
  margin-top: 15%;
`
export const Section = styled.View`
  margin: 20px 0;
`
export const CardsView = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`
export const Left = styled.View``
export const Right = styled.View``
export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`
export const ResumeButton = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
`
export const LogoutButton = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
  margin-left: auto;
  margin-top: auto;
`
export const SectionTitle = styled.Text`
  color: #fff;
  margin-left: 12px;
  font-size: 20px;
  font-weight: bold;
`
export const Resume = styled.Text`
  color: #fff;
  font-size: 18px;
`
export const Balance = styled.View`
  flex-direction: row;
  align-items: baseline;
`
export const BalanceValue = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 28px;
  margin-left: 3px;
`
export const BalanceLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const Container = styled(SafeAreaView).attrs(props => ({
  paddingTop: Platform.OS === 'android' ? 25 : 0
}))``
