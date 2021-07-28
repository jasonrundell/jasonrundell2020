import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import {
  root,
  active as activeStyle,
  text as textStyle,
} from './Button.module.scss'

const Button = ({ children, onClick, isActive }) => {
  const rootClasses = classNames(root, isActive && activeStyle)
  return (
    <button onClick={onClick} className={rootClasses}>
      <span className={textStyle}>{children}</span>
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
