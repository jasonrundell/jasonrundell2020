import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { catchWarnings } from './test-utils'
// import { create } from 'react-test-renderer'

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

describe('Badge component', () => {
  it('Card has required children', () => {
    act(() => {
      render(<Card>Card component</Card>, container)
    })
    expect(container.textContent).toBe('Card component')
  })

  it('Card elevations work', () => {
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
})
