import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Spacer from '../Layout/Spacer'
import Rules from '../Layout/Spacer/prop-rules'

const { heightRules } = Rules

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

describe('Spacer component', () => {
  it('Spacer renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Spacer />
          <Spacer sizeLarge={heightRules[0]} />
          <Spacer sizeLarge={heightRules[heightRules.length - 1]} />
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
