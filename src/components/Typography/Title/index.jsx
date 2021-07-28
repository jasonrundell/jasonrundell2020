import React from 'react'
import PropTypes from 'prop-types'

import { h1, h2, h3, h4 } from './Title.module.scss'

const Title = ({ level, children }) => {
  let titleClass
  let Component
  switch (level) {
    case 1:
      titleClass = h1
      Component = 'h1'
      break
    case 2:
      titleClass = h2
      Component = 'h2'
      break
    case 3:
      titleClass = h3
      Component = 'h3'
      break
    case 4:
      titleClass = h4
      Component = 'h4'
      break
    default:
      titleClass = h1
      Component = 'h1'
  }
  return <Component className={titleClass}>{children}</Component>
}

Title.defaultProps = {
  level: 1,
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.any.isRequired,
}

export default Title
