import React from 'react'
import PropTypes from 'prop-types'

import { root } from './SkipToMain.module.scss'

const SkipToMain = ({ children }) => (
  <a href="#main" className={root}>
    {children}
  </a>
)

SkipToMain.propTypes = {
  children: PropTypes.any.isRequired,
}

export default SkipToMain
