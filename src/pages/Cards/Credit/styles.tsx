import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 30px 150px;
`

export const Footer = styled.View`
  margin-top: 30%;
  width: 70%;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`

export const Option = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #fff;
  margin: 0 10px;
  padding: 30px 0;
`
export const Head = styled.View`
  flex-direction: row;
  margin: 20px 0;
`
export const Icon = styled(FontAwesome)`
  /* margin: 20px 0px; */
`
export const CardButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #e4e1e1;
  margin: 0 10px;
  padding: 30px 0;
`
