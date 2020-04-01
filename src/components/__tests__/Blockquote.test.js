import React from 'react'
import { create } from 'react-test-renderer'

import Blockquote from '../Blockquote'

describe('Blockquote component', () => {
  test('Matches the snapshot', () => {
    const component = create(<Blockquote>Blockquote child</Blockquote>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
