import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Paragraph from '../Typography/Paragraph'

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

describe('Paragraph component', () => {
  it('Paragraph renders correctly', () => {
    const tree = renderer
      .create(<Paragraph>Paragraph component</Paragraph>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Paragraph has required children prop', () => {
    act(() => {
      render(<Paragraph>Paragraph component</Paragraph>, container)
    })
    expect(container.textContent).toBe('Paragraph component')
  })
})
