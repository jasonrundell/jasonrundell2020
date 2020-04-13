import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Cite from '../Cite'

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

describe('Cite component', () => {
  it('Cite renders correctly', () => {
    const tree = renderer.create(<Cite>Cite component</Cite>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Cite has required children prop', () => {
    act(() => {
      render(<Cite>Cite component</Cite>, container)
    })
    expect(container.textContent).toBe('Cite component')
  })
})
