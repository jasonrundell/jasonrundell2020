import React from 'react'
import PropTypes from 'prop-types'

import styles from './Row.module.scss'

const Row = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Row
