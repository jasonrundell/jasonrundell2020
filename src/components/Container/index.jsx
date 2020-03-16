import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Container.module.scss'

const Container = ({ children, isContained, isCentered }) => {
  const classes = classNames(
    styles.root,
    isContained && styles.contained,
    isCentered && styles.centered
  )
  return <section className={classes}>{children}</section>
}

Container.defaultProps = {
  isContained: false,
  isCentered: false,
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  isContained: PropTypes.bool,
  isCentered: PropTypes.bool,
}

export default Container
