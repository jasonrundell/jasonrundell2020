import React from 'react'
import PropTypes from 'prop-types'

// CSS
import styles from './Header.module.scss'

const Header = ({ children }) => {
  return <header className={styles.root}>{children}</header>
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header
