import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Footer from '../Footer'

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

describe('Footer component', () => {
  it('Footer renders correctly', () => {
    const tree = renderer.create(<Footer>Footer component</Footer>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Footer has required children prop', () => {
    act(() => {
      render(<Footer>Footer component</Footer>, container)
    })
    expect(container.textContent).toBe('Footer component')
  })
})
