import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Grid from '../Layout/Grid'
import Rules from '../Layout/Grid/prop-rules'

const { columnRules, breakInsideRules } = Rules

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

describe('Grid component', () => {
  it('Grid renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Grid>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid columnCount={columnRules[0]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid columnCount={columnRules[columnRules.length - 1]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid mediumColumnCount={columnRules[0]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid mediumColumnCount={columnRules[columnRules.length - 1]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid largeColumnCount={columnRules[0]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid largeColumnCount={columnRules[columnRules.length - 1]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid breakInside={breakInsideRules[0]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
          <Grid breakInside={breakInsideRules[breakInsideRules.length - 1]}>
            <div>Item</div>
            <div>Item</div>
            <div>Item</div>
          </Grid>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Grid has required children prop', () => {
    act(() => {
      render(<Grid>Grid component</Grid>, container)
    })
    expect(container.textContent).toBe('Grid component')
  })
})
