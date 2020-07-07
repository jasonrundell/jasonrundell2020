import React from 'react'
import PropTypes from 'prop-types'

import Rules from './prop-rules'

import { classNames } from '../../../utils/css'
import { toCamelCase } from '../../../utils/format'

import styles from './Spacer.module.scss'

const { heightRules } = Rules

const Spacer = ({ sizeSmall, sizeMedium, sizeLarge }) => {
  const classes = classNames(
    styles.root,
    sizeSmall && styles[toCamelCase(`small-${sizeSmall}`)],
    sizeMedium && styles[toCamelCase(`medium-${sizeMedium}`)],
    sizeLarge && styles[toCamelCase(`large-${sizeLarge}`)]
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
