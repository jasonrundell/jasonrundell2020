import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Button from '../Button'

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

describe('Button component', () => {
  it('Button renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Button>Button component</Button>
          <Button isActive>Button isActive = true</Button>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Button has required children prop', () => {
    act(() => {
      render(<Button>Button component</Button>, container)
    })
    expect(container.textContent).toBe('Button component')
  })

  it('Button isActive prop', () => {
    act(() => {
      render(<Button isActive>isActive = true</Button>, container)
    })
    expect(container.textContent).toBe('isActive = true')
  })
})
