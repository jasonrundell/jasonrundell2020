import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { catchWarnings } from '../../utils/test-utils'

import Badge from '../Badge'

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

describe('Badge component', () => {
  it('Badge required icon prop', () => {
    act(() => {
      render(<Badge icon="icon" />, container)
    })
    expect(container.textContent).toBe('icon')
  })

  it('Badge isInverse prop', () => {
    act(() => {
      render(
        <Badge icon="icon" isInverse={true}>
          icon
        </Badge>,
        container
      )
    })
    expect(container.textContent).toBe('icon')

    act(() => {
      render(
        <Badge icon="icon" isInverse={false}>
          icon
        </Badge>,
        container
      )
    })
    expect(container.textContent).toBe('icon')
  })
})
