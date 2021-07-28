import React from 'react'
import PropTypes from 'prop-types'

// CSS
import { root } from './Header.module.scss'

const Header = ({ children }) => {
  return <header className={root}>{children}</header>
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header
