import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './Container.module.scss'

const Container = ({ children }) => {
  const className = classNames(styles.root)
  return <div className={className}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Container
