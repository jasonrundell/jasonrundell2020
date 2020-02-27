import React from 'react'
import PropTypes from 'prop-types'

const Blockquote = ({ children }) => {
  return <blockquote>{children}</blockquote>
}

Blockquote.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Blockquote
