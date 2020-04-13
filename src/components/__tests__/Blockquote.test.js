import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Blockquote from '../Blockquote'

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

describe('Blockquote component', () => {
  it('Blockquote renders correctly', () => {
    const tree = renderer
      .create(<Blockquote>Blockquote component</Blockquote>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Blockquote has required children', () => {
    act(() => {
      render(<Blockquote>Blockquote component</Blockquote>, container)
    })
    expect(container.textContent).toBe('Blockquote component')
  })
})
