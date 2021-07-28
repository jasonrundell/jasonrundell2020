import React from 'react'
import PropTypes from 'prop-types'

// CSS
import { root } from './Blockquote.module.scss'

const Blockquote = ({ children }) => {
  return <blockquote className={root}>{children}</blockquote>
}

Blockquote.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Blockquote
