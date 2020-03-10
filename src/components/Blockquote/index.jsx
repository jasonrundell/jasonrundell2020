import React from 'react'
import PropTypes from 'prop-types'

// CSS
import styles from './Blockquote.module.scss'

const Blockquote = ({ children }) => {
  return <blockquote className={styles.root}>{children}</blockquote>
}

Blockquote.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Blockquote
