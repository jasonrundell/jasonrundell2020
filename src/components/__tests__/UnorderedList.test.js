import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import UnorderedList from '../Lists/UnorderedList'

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

describe('UnorderedList component', () => {
  it('UnorderedList renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <UnorderedList list={listData} />
          <UnorderedList list={listData} isHorizontal={true} />
          <UnorderedList list={listData}>
            <UnorderedList list={listData} />
          </UnorderedList>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
