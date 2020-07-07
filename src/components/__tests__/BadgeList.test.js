import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import BadgeList from '../Lists/BadgeList'

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

const listData = [
  {
    id: 'eb882bd6-c391-5613-9795-2dd6cd134e54',
    icon: '⭐',
    label: 'Star',
  },
  {
    id: 'f4f7b181-cc7d-57ce-9d59-15a9916fbec1',
    icon: '😀',
    label: 'Smiley',
  },
  {
    id: 'd4b52d23-aa82-5539-badb-48382003d372',
    icon: '💫',
    label: 'Dizzy',
  },
]

describe('BadgeList component', () => {
  it('BadgeList renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <BadgeList list={listData} />
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
