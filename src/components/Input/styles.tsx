import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: 0 16px;
  /* background: #fff; */
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f87c28;
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #fff;
    `}
`

export const TextInput = styled.TextInput`
  padding: 20px;
  flex: 1;
  color: #fff;
  font-size: 16px;
`
export const LabelError = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  color: #c53030;
  font-size: 16px;
`
