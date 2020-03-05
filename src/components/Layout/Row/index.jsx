import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Row.module.scss'

const Row = ({ justify, children }) => {
  const className = classNames(styles.root, styles[justify])

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
    'spaceAround',
    'spaceBetween',
    'spaceEvenly',
  ]),
  children: PropTypes.any.isRequired,
}

export default Row
