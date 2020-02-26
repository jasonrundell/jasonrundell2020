import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Grid.module.scss'

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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

  const className = classNames(
    styles.root,
    styles[colClassName],
    styles[mediumColClassName],
    styles[largeColClassName],
    breakInside && styles[breakInsideClassName]
  )

  return <div className={className}>{children}</div>
}

Grid.defaultProps = {
  columnCount: 1,
  mediumColumnCount: 1,
  largeColumnCount: 1,
}

Grid.propTypes = {
  columnCount: PropTypes.oneOf(columns),
  mediumColumnCount: PropTypes.oneOf(columns),
  largeColumnCount: PropTypes.oneOf(columns),
  breakInside: PropTypes.oneOf([
    'auto',
    'avoid',
    'avoid-page',
    'avoid-column',
    'avoid-region',
    'inherit',
    'initial',
    'unset',
  ]),
  children: PropTypes.any.isRequired,
}

export default Grid
