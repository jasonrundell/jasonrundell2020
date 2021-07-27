import React from 'react'
import PropTypes from 'prop-types'

import { h1, h2, h3, h4 } from './Title.module.scss'

const Title = ({ level, children }) => {
  const Component = `h${level}`
  return <Component className={[Component]}>{children}</Component>
}

Title.defaultProps = {
  level: 1,
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.any.isRequired,
}

export default Title
