import React from 'react'
import { create, act } from 'react-test-renderer'

import { CardProps } from '../components/Card'
import Card from '../components/Card'

let props: CardProps = {
  icon: 'usd',
  title: 'Dotz',
  onSelect: jest.fn(),
}
jest.mock('react-native-vector-icons/FontAwesome', () => 'usd')
const tree = create(<Card {...props} />)

test('snapshot', () => {
  expect(tree).toMatchSnapshot()
})

it(`render component`, async () => {
  const card = tree.root.findByProps({ testID: 'button' }).props
  expect(card).toBeTruthy()
})
it(`render component `, async () => {
  const card = tree.root.findByProps({ testID: 'title' }).props
  expect(card).toBeTruthy()
})
test('button press', () => {
  const card = tree.root.findByProps({ testID: 'button' }).props
  act(() => card.onPress())
})
