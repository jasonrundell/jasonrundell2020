import React from 'react'
import PropTypes from 'prop-types'

import styles from './Section.module.scss'

const Section = ({ id, children }) => {
  return (
    <section id={id} className={styles.root}>
      {children}
    </section>
  )
}

Section.defaultProps = {
  id: null,
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Section
