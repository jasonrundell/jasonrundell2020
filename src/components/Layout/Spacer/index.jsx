import React from 'react'
import PropTypes from 'prop-types'

import { heightRules } from './prop-rules'

import { classNames } from '../../../utils/css'
import { toCamelCase } from '../../../utils/format'

import {
  root as rootStyle,
  largeLarge,
  largeLarger,
  largeLargest,
  largeNormal,
  largeSmall,
  largeSmaller,
  largeSmallest,
  mediumLarge,
  mediumLarger,
  mediumLargest,
  mediumNormal,
  mediumSmall,
  mediumSmaller,
  mediumSmallest,
  smallLarge,
  smallLarger,
  smallLargest,
  smallNormal,
  smallSmall,
  smallSmaller,
  smallSmallest,
} from './Spacer.module.scss'

const Spacer = ({ sizeSmall, sizeMedium, sizeLarge }) => {
  const classes = classNames(
    rootStyle,
    sizeSmall === 'smallest' && smallSmallest,
    sizeSmall === 'smaller' && smallSmaller,
    sizeSmall === 'small' && smallSmall,
    sizeSmall === 'normal' && smallNormal,
    sizeSmall === 'large' && smallLarge,
    sizeSmall === 'larger' && smallLarger,
    sizeSmall === 'largest' && smallLargest,
    sizeMedium === 'smallest' && mediumSmallest,
    sizeMedium === 'smaller' && mediumSmaller,
    sizeMedium === 'small' && mediumSmall,
    sizeMedium === 'normal' && mediumNormal,
    sizeMedium === 'large' && mediumLarge,
    sizeMedium === 'larger' && mediumLarger,
    sizeMedium === 'largest' && mediumLargest,
    sizeLarge === 'smallest' && largeSmallest,
    sizeLarge === 'smaller' && largeSmaller,
    sizeLarge === 'small' && largeSmall,
    sizeLarge === 'normal' && largeNormal,
    sizeLarge === 'large' && largeLarge,
    sizeLarge === 'larger' && largeLarger,
    sizeLarge === 'largest' && largeLargest
  )
  return <div className={classes} />
}

Spacer.defaultProps = {
  sizeSmall: heightRules[2],
  sizeMedium: heightRules[3],
  sizeLarge: heightRules[4],
}

Spacer.propTypes = {
  sizeSmall: PropTypes.oneOf(heightRules),
  sizeMedium: PropTypes.oneOf(heightRules),
  sizeLarge: PropTypes.oneOf(heightRules),
}

export default Spacer
