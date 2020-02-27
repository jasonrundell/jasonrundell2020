import React from 'react'
import PropTypes from 'prop-types'

const Cite = ({ children }) => {
  return <cite>{children}</cite>
}

Cite.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Cite
