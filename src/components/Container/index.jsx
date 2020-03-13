import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Section.module.scss'

const Section = ({ children, isContained, isCentered }) => {
  const className = classNames(
    styles.root,
    isContained && styles.contained,
    isCentered && styles.centered
  )
  return <section className={className}>{children}</section>
}

Section.defaultProps = {
  isContained: false,
  isCentered: false,
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  isContained: PropTypes.bool,
  isCentered: PropTypes.bool,
}

export default Section
