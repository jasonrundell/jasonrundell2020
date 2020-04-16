import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import References from '../References'

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
    id: '79c48a1e-b7d2-54fe-8240-3b4544059f47',
    quote: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Jason brings a creativity to technology rarely seen in many developers. Jason continues to be a resource that I count on not only from a development perspective but also a trusted advisor for future development and the evolution of our technology platforms.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
    citeName: 'Gregg Tilston',
    company: 'Flight Centre Ltd.',
  },
]

describe('References component', () => {
  it('References renders correctly', () => {
    const tree = renderer.create(<References references={testData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('References has required references prop', () => {
    act(() => {
      render(<References references={testData} />, container)
    })
  })
})
