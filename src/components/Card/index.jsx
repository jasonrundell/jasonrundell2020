import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import { root } from './Card.module.scss'

const Card = ({ children, elevation, isElevationAnimated }) => {
  const classes = classNames(
    styles.root,
    styles[`elevation${elevation}`],
    isElevationAnimated && styles.animation
  )
  return <div className={classes}>{children}</div>
}

Card.defaultProps = {
  elevation: 2,
  isElevationAnimated: true,
}

Card.propTypes = {
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  isElevationAnimated: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export default Card
