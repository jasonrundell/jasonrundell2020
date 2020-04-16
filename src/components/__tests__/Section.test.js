import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Section from '../Section'

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

describe('Section component', () => {
  it('Section renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Section>Section component</Section>
          <Section id="thisistheid">Section with id</Section>
          <Section className="class__name--test">
            Section with className
          </Section>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Section has required children prop', () => {
    act(() => {
      render(<Section>Section component</Section>, container)
    })
    expect(container.textContent).toBe('Section component')
  })

  it('Section id prop', () => {
    act(() => {
      render(
        <Section id="thisistheid">Section with id=thisistheid</Section>,
        container
      )
    })
    expect(container.textContent).toBe('Section with id=thisistheid')
  })

  it('Section className prop', () => {
    act(() => {
      render(
        <Section className="class__name--test">Section with className</Section>,
        container
      )
    })
    expect(container.textContent).toBe('Section with className')
  })
})
