import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ children }) => {
  return <main id="main">{children}</main>
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Main
