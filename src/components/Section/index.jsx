import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children }) => {
  return <section>{children}</section>
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Section
