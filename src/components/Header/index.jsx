import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children }) => {
  return <header>{children}</header>
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Header
