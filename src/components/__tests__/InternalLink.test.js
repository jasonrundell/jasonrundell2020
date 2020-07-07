import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import InternalLink from '../Links/InternalLink'

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

describe('InternalLink component', () => {
  it('InternalLink renders correctly', () => {
    const tree = renderer
      .create(<InternalLink url="/">InternalLink component /</InternalLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('InternalLink has required children prop', () => {
    act(() => {
      render(
        <InternalLink url="/">InternalLink component</InternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('InternalLink component')
  })

  it('InternalLink url prop', () => {
    act(() => {
      render(
        <InternalLink url="https://www.google.com/">
          https://www.google.com/
        </InternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('https://www.google.com/')
  })
})
