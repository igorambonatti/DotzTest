import { Header as HeaderNB } from 'native-base'
import styled from 'styled-components/native'

export const Container = styled(HeaderNB).attrs(props => ({
  marginTop: Platform.OS === 'android' ? 25 : 0
}))`
  top: -5px;
  background-color: #f56700;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-bottom-width: 0;
`

export const BackButton = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
