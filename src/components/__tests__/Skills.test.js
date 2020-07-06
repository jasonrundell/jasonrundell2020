import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Skills from '../Skills'

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

const testData = [
  {
    id: 'eb882bd6-c391-5613-9795-2dd6cd134e54',
    category: 'APIs',
    name: 'Facebook',
  },
  {
    id: 'f4f7b181-cc7d-57ce-9d59-15a9916fbec1',
    category: 'APIs',
    name: 'Slack',
  },
  {
    id: 'd4b52d23-aa82-5539-badb-48382003d372',
    category: 'APIs',
    name: 'Google Places',
  },
]

describe('Skills component', () => {
  it('Skills renders correctly', () => {
    const tree = renderer.create(<Skills skills={testData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Skills has required skills prop', () => {
    act(() => {
      render(<Skills skills={testData} />, container)
    })
  })
})
