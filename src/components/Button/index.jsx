import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import styles from './Button.module.scss'

const Button = ({ children, onClick, isActive }) => {
  const rootClasses = classNames(styles.root, isActive && styles.active)
  return (
    <button onClick={onClick} className={rootClasses}>
      <span className={styles.text}>{children}</span>
    </button>
  )
}

Button.defaultProps = {
  isActive: false,
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

export default Button
