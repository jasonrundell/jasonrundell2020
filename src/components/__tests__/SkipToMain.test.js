import React from 'react'
import { create } from 'react-test-renderer'

import SkipToMain from '../SkipToMain'

describe('SkipToMain component', () => {
  test('Matches the snapshot', () => {
    const component = create(<SkipToMain />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
