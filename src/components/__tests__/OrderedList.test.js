import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import OrderedList from '../Lists/OrderedList'

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

const listData = ['one', 'two', 'three']

describe('OrderedList component', () => {
  it('OrderedList renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <OrderedList list={listData} />
          <OrderedList list={listData} isHorizontal={true} />
          <OrderedList list={listData}>
            <OrderedList list={listData} />
          </OrderedList>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
