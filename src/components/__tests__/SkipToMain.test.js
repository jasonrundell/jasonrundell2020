import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import SkipToMain from '../SkipToMain'

catchWarnings()

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('SkipToMain component', () => {
  it('SkipToMain renders correctly', () => {
    const tree = renderer
      .create(<SkipToMain>Skip to main content</SkipToMain>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('SkipToMain has required children prop', () => {
    act(() => {
      render(<SkipToMain>Skip to main content</SkipToMain>, container)
    })
    expect(container.textContent).toBe('Skip to main content')
  })
})
