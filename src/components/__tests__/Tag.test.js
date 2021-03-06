import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Tag from '../Tag'

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

describe('Tag component', () => {
  it('Tag renders correctly', () => {
    const tree = renderer.create(<Tag text="Tag component" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Tag has required text prop', () => {
    act(() => {
      render(<Tag text="Tag component" />, container)
    })
    expect(container.textContent).toBe('Tag component')
  })
})
