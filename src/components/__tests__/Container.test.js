import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Container from '../Layout/Container'

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

describe('Container component', () => {
  it('Container renders correctly', () => {
    const tree = renderer
      .create(<Container>Container component</Container>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Container has required children prop', () => {
    act(() => {
      render(<Container>Container component</Container>, container)
    })
    expect(container.textContent).toBe('Container component')
  })
})
