import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import Box from '../Layout/Box'

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

describe('Box component', () => {
  it('Box renders correctly', () => {
    const tree = renderer
      .create(
        <div>
          <Box>Box component</Box>
          <Box isTight>isTight true</Box>
          <Box isTight={false}>isTight false</Box>
          <Box isRoomy>isRoomy true</Box>
          <Box isRoomy={false}>isRoomy false</Box>
        </div>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Box has required children prop', () => {
    act(() => {
      render(<Box>Box component</Box>, container)
    })
    expect(container.textContent).toBe('Box component')
  })

  it('Box isTight prop', () => {
    act(() => {
      render(<Box isTight={true}>isTight true</Box>, container)
    })
    expect(container.textContent).toBe('isTight true')

    act(() => {
      render(<Box isTight={false}>isTight false</Box>, container)
    })
    expect(container.textContent).toBe('isTight false')
  })

  it('Box isRoomy prop', () => {
    act(() => {
      render(<Box isRoomy={true}>isRoomy true</Box>, container)
    })
    expect(container.textContent).toBe('isRoomy true')

    act(() => {
      render(<Box isRoomy={false}>isRoomy false</Box>, container)
    })
    expect(container.textContent).toBe('isRoomy false')
  })
})
