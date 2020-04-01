import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { create } from 'react-test-renderer'

import Card from '../Card'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Card component', () => {
  test('Matches the snapshot', () => {
    const component = create(<Card>Card child</Card>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test(`elevation prop of 0 renders correctly`, () => {
    const testRenderer = create(<Card elevation={0}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(0)
  })

  test(`elevation prop of 1 renders correctly`, () => {
    const testRenderer = create(<Card elevation={1}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(1)
  })

  test(`elevation prop of 2 renders correctly`, () => {
    const testRenderer = create(<Card elevation={2}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(2)
  })

  test(`elevation prop of 3 renders correctly`, () => {
    const testRenderer = create(<Card elevation={3}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(3)
  })

  test(`elevation prop of 4 renders correctly`, () => {
    const testRenderer = create(<Card elevation={4}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(4)
  })

  test(`elevation prop of 5 renders correctly`, () => {
    const testRenderer = create(<Card elevation={5}>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.elevation).toBe(5)
  })

  test(`isElevationAnimated prop of true renders correctly`, () => {
    const testRenderer = create(<Card isElevationAnimated>Card child</Card>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(Card).props.isElevationAnimated).toBe(true)
  })
})
