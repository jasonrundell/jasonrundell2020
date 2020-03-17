import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Box.module.scss'

const Box = ({ children, isTight, isRoomy }) => {
  const classes = classNames(
    styles.root,
    isTight && styles.tight,
    isRoomy && styles.roomy
  )
  return <div className={classes}>{children}</div>
}

Box.defaultProps = {
  isTight: false,
  isRoomy: false,
}

Box.propTypes = {
  isTight: PropTypes.bool,
  isRoomy: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export default Box
