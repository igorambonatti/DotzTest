import React from 'react'
import { create, act } from 'react-test-renderer'

import { ButtonProps } from '../components/Button'
import Button from '../components/Button'

let props: ButtonProps = {
  onPress: jest.fn(),
  children: 'Submit',
}

const tree = create(<Button {...props} />)

test('snapshot', () => {
  expect(tree).toMatchSnapshot()
})
it(`render component`, async () => {
  const button = tree.root.findByProps({ testID: 'button' }).props
  expect(button).toBeTruthy()
})

test('button press', () => {
  const button = tree.root.findByProps({ testID: 'button' }).props
  act(() => button.onPress())
})
