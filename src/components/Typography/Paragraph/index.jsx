import React from 'react'
import PropTypes from 'prop-types'

import { root } from './Paragraph.module.scss'

const Paragraph = ({ children }) => {
  return <p className={root}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Paragraph
