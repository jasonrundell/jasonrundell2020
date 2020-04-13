import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Card from '../Card'

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

describe('Card component', () => {
  it('Card renders correctly', () => {
    const tree = renderer.create(<Card>Card component</Card>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Card has required children prop', () => {
    act(() => {
      render(<Card>Card component</Card>, container)
    })
    expect(container.textContent).toBe('Card component')
  })

  it('Card elevations prop', () => {
    act(() => {
      render(<Card elevation={0}>Elevation 0</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 0')

    act(() => {
      render(<Card elevation={1}>Elevation 1</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 1')

    act(() => {
      render(<Card elevation={2}>Elevation 2</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 2')

    act(() => {
      render(<Card elevation={3}>Elevation 3</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 3')

    act(() => {
      render(<Card elevation={4}>Elevation 4</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 4')

    act(() => {
      render(<Card elevation={5}>Elevation 5</Card>, container)
    })
    expect(container.textContent).toBe('Elevation 5')
  })

  it('Card isElevationAnimated prop', () => {
    act(() => {
      render(
        <Card isElevationAnimated={true}>isElevationAnimated true</Card>,
        container
      )
    })
    expect(container.textContent).toBe('isElevationAnimated true')

    act(() => {
      render(
        <Card isElevationAnimated={false}>isElevationAnimated false</Card>,
        container
      )
    })
    expect(container.textContent).toBe('isElevationAnimated false')
  })
})
