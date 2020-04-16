import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Positions from '../Positions'

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
    id: '21694cf0-7b34-5678-ab04-114728a8802c',
    orderId: 7,
    role: 'Business Owner',
    company: 'Code Summoner Corp.',
    startDate: 'April 2012',
    endDate: 'Present',
  },
  {
    id: 'bc304f5c-5089-534e-be51-e7754a84a045',
    orderId: 6,
    role: 'Senior Front End Web Developer',
    company: 'Intuit',
    startDate: 'July 2019',
    endDate: 'Present',
  },
]

describe('Positions component', () => {
  it('Positions renders correctly', () => {
    const tree = renderer.create(<Positions positions={testData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Positions has required positions prop', () => {
    act(() => {
      render(<Positions positions={testData} />, container)
    })
  })
})
