import React from 'react'
import { create } from 'react-test-renderer'

import SEO from '../SEO'

describe('SEO component', () => {
  test('Matches the snapshot', () => {
    const component = create(
      <SEO
        title="Seo title"
        description="Seo description"
        author="Seo author"
        lang="en"
      />
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
