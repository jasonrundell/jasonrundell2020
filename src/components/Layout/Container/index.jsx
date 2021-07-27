import React from 'react'
import PropTypes from 'prop-types'

import { root } from './Container.module.scss'

const Container = ({ children }) => <div className={root}>{children}</div>

Container.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Container
