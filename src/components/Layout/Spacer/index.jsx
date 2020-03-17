import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'
import { toCamelCase } from '../../../utils/format'

import styles from './spacer.module.scss'

const Spacer = ({ sizeSmall, sizeMedium, sizeLarge }) => {
  const classes = classNames(
    styles.root,
    sizeSmall && styles[toCamelCase(`small-${sizeSmall}`)],
    sizeMedium && styles[toCamelCase(`medium-${sizeMedium}`)],
    sizeLarge && styles[toCamelCase(`large-${sizeLarge}`)]
  )
  return <div className={classes} />
}

const heightValues = [
  'smallest',
  'smaller',
  'small',
  'normal',
  'large',
  'larger',
  'largest',
]

Spacer.defaultProps = {
  sizeSmall: 'small',
  sizeMedium: 'normal',
  sizeLarge: 'large',
}

Spacer.propTypes = {
  sizeSmall: PropTypes.oneOf(heightValues),
  sizeMedium: PropTypes.oneOf(heightValues),
  sizeLarge: PropTypes.oneOf(heightValues),
}

export default Spacer
