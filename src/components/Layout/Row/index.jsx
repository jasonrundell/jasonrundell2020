import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Row.module.scss'

const Row = ({ justify, children }) => {
  let justifyClassName = 'flex-start'

  switch (justify) {
    case 'start':
      justifyClassName = 'start'
      break
    case 'end':
      justifyClassName = 'end'
      break
    case 'space-around':
      justifyClassName = 'spaceAround'
      break
    case 'space-between':
      justifyClassName = 'spaceBetween'
      break
    case 'space-evenly':
      justifyClassName = 'spaceEvenly'
      break
    default:
      justifyClassName = justify
  }

  const className = classNames(styles.root, styles[justifyClassName])

  return <div className={className}>{children}</div>
}

Row.defaultProps = {
  justify: 'start',
}

Row.propTypes = {
  justify: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  children: PropTypes.any.isRequired,
}

export default Row
