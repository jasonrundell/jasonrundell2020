import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

// CSS
import styles from './Badge.module.scss'

const Badge = ({ icon, isInverse }) => {
  const className = classNames(styles.root, isInverse && styles.inverse)
  return (
    <div className={className}>
      <span>{icon}</span>
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
