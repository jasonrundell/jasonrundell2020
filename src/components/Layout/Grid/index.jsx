import React from 'react'
import PropTypes from 'prop-types'

import Rules from './prop-rules'

import { classNames } from '../../../utils/css'

import styles from './Grid.module.scss'

const { columnRules, breakInsideRules } = Rules

const Grid = ({
  columnCount,
  mediumColumnCount,
  largeColumnCount,
  breakInside,
  children,
}) => {
  const colClassName = `col${columnCount}`
  const mediumColClassName = `colMedium${mediumColumnCount}`
  const largeColClassName = `colLarge${largeColumnCount}`
  const breakInsideClassName = `breakInside__${breakInside}`

  const classes = classNames(
    styles.root,
    styles[colClassName],
    styles[mediumColClassName],
    styles[largeColClassName],
    breakInside && styles[breakInsideClassName]
  )

  return <div className={classes}>{children}</div>
}

Grid.defaultProps = {
  columnCount: 1,
  mediumColumnCount: 1,
  largeColumnCount: 1,
}

Grid.propTypes = {
  columnCount: PropTypes.oneOf(columnRules),
  mediumColumnCount: PropTypes.oneOf(columnRules),
  largeColumnCount: PropTypes.oneOf(columnRules),
  breakInside: PropTypes.oneOf(breakInsideRules),
  children: PropTypes.any.isRequired,
}

export default Grid
