import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return <p>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Paragraph
