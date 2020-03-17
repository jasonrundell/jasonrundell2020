import React from 'react'
import PropTypes from 'prop-types'

import styles from './Paragraph.module.scss'

const Paragraph = ({ children }) => {
  return <p className={styles.root}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Paragraph
