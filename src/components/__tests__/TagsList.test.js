import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import TagsList from '../Lists/TagsList'

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

describe('TagsList component', () => {
  it('TagsList renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <TagsList list={listData} />
          <TagsList list={listData} orderBy="ASC" />
          <TagsList list={listData} orderBy="DESC" />
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
