import React from 'react'
import { create } from 'react-test-renderer'

import Badge from '../Badge'

describe('Badge component', () => {
  test('Matches the snapshot', () => {
    const component = create(<Badge icon="Icon" />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
