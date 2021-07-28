import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

import {
  root as rootStyle,
  elevation0,
  elevation1,
  elevation2,
  elevation3,
  elevation4,
  elevation5,
  animation as animationStyle,
} from './Card.module.scss'

const Card = ({ children, elevation, isElevationAnimated }) => {
  const classes = classNames(
    rootStyle,
    elevation === 0 && elevation0,
    elevation === 1 && elevation1,
    elevation === 2 && elevation2,
    elevation === 3 && elevation3,
    elevation === 4 && elevation4,
    elevation === 5 && elevation5,
    isElevationAnimated && animationStyle
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
