import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

const Section = ({ children }) => {
  return <section className={styles.root}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Section
