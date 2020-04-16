import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Main from '../Main'

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

describe('Main component', () => {
  it('Main renders correctly', () => {
    const tree = renderer.create(<Main>Main component</Main>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Main has required children prop', () => {
    act(() => {
      render(<Main>Main component</Main>, container)
    })
    expect(container.textContent).toBe('Main component')
  })
})
