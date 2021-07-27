import React from 'react'
import PropTypes from 'prop-types'

import Rules from './prop-rules'

import { classNames } from '../../../utils/css'

import { root } from './Row.module.scss'

const { justifyRules } = Rules

const Row = ({ justify, children }) => {
  const classes = classNames(styles.root, styles[justify])

  return <div className={classes}>{children}</div>
}

Row.defaultProps = {
  justify: justifyRules[0],
}

Row.propTypes = {
  justify: PropTypes.oneOf(justifyRules),
  children: PropTypes.any.isRequired,
}

export default Row
