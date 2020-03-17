import React from 'react'
import PropTypes from 'prop-types'

import styles from './Strong.module.scss'

const Strong = ({ children }) => {
  return <strong className={styles.root}>{children}</strong>
}

Strong.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Strong
