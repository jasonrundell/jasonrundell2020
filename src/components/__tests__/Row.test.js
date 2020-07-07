import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Row from '../Layout/Row'
import Rules from '../Layout/Row/prop-rules'

const { justifyRules } = Rules

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

describe('Row component', () => {
  it('Row renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Row>Row component</Row>
          <Row justify={justifyRules[0]}>
            Row component justify={justifyRules[0]}
          </Row>
          <Row justify={justifyRules[justifyRules.length - 1]}>
            Row component justify={justifyRules[justifyRules.length - 1]}
          </Row>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Row has required children prop', () => {
    act(() => {
      render(<Row>Row component</Row>, container)
    })
    expect(container.textContent).toBe('Row component')
  })
})
