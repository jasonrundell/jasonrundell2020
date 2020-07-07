import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Strong from '../Typography/Strong'

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

describe('Strong component', () => {
  it('Strong renders correctly', () => {
    const tree = renderer.create(<Strong>Strong component</Strong>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Strong has required children prop', () => {
    act(() => {
      render(<Strong>Strong component</Strong>, container)
    })
    expect(container.textContent).toBe('Strong component')
  })
})
