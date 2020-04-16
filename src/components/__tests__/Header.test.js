import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Header from '../Header'

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

describe('Header component', () => {
  it('Header renders correctly', () => {
    const tree = renderer.create(<Header>Header component</Header>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Header has required children prop', () => {
    act(() => {
      render(<Header>Header component</Header>, container)
    })
    expect(container.textContent).toBe('Header component')
  })
})
