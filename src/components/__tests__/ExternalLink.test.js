import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import ExternalLink from '../Links/ExternalLink'

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

describe('ExternalLink component', () => {
  it('ExternalLink renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <ExternalLink url="/">ExternalLink component /</ExternalLink>
          <ExternalLink url="/" rel="noopener noreferrer">
            ExternalLink component rel = noopener noreferrer
          </ExternalLink>
          <ExternalLink url="/" target="_blank">
            ExternalLink component target = _blank
          </ExternalLink>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('ExternalLink has required children prop', () => {
    act(() => {
      render(
        <ExternalLink url="/">ExternalLink component</ExternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('ExternalLink component')
  })

  it('ExternalLink url prop', () => {
    act(() => {
      render(
        <ExternalLink url="https://www.google.com/">
          https://www.google.com/
        </ExternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('https://www.google.com/')
  })

  it('ExternalLink rel prop', () => {
    act(() => {
      render(
        <ExternalLink url="https://www.google.com/" rel="noopener noreferrer">
          noopener noreferrer
        </ExternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('noopener noreferrer')
  })

  it('ExternalLink target prop', () => {
    act(() => {
      render(
        <ExternalLink url="https://www.google.com/" target="_blank">
          _blank
        </ExternalLink>,
        container
      )
    })
    expect(container.textContent).toBe('_blank')
  })
})
