import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Quote from '../Quote'

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

describe('Quote component', () => {
  it('Quote renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Quote
            footerAffix={`Footer affix`}
            footerPrefix={`Footer prefix`}
            cite={`Cite text`}
          >
            Quote component
          </Quote>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Quote has required children prop', () => {
    act(() => {
      render(<Quote>Quote component</Quote>, container)
    })
    expect(container.textContent).toBe('Quote component')
  })
})
