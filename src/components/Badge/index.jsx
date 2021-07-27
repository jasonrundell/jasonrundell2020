import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'

import { classNames } from '../../utils/css'

// CSS
import { root, inverse as inverseStyle } from './Badge.module.scss'

const { Box } = Layout

const Badge = ({ icon, isInverse }) => {
  const classes = classNames(root, isInverse && inverseStyle)
  return (
    <div className={classes}>
      <Box isTight>{icon}</Box>
    </div>
  )
}

Badge.defaultProps = {
  isInverse: false,
}

Badge.propTypes = {
  icon: PropTypes.any.isRequired,
  isInverse: PropTypes.bool,
}

export default Badge
