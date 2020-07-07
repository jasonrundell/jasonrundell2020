import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Title from '../Typography/Title'

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

describe('Title component', () => {
  it('Title renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Title>Title component</Title>
          <Title level={1}>Title component level 1</Title>
          <Title level={2}>Title component level 2</Title>
          <Title level={3}>Title component level 3</Title>
          <Title level={4}>Title component level 4</Title>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Title has required children prop', () => {
    act(() => {
      render(<Title>Title component</Title>, container)
    })
    expect(container.textContent).toBe('Title component')
  })
})
