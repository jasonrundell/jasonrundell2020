import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => {
  return <footer>{children}</footer>
}

Footer.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Footer
