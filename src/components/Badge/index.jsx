import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'

import { classNames } from '../../utils/css'

// CSS
import styles from './Badge.module.scss'

const { Box } = Layout

const Badge = ({ icon, isInverse }) => {
  const className = classNames(styles.root, isInverse && styles.inverse)
  return (
    <div className={className}>
      <Box>{icon}</Box>
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
