import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import renderer from 'react-test-renderer'
import { catchWarnings } from '../../utils/test-utils'

import DownloadResumeButton from '../DownloadResumeButton'

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

describe('DownloadResumeButton component', () => {
  it('DownloadResumeButton renders correctly', () => {
    const tree = renderer.create(<DownloadResumeButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
