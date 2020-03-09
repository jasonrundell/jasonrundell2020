import React from 'react'
import PropTypes from 'prop-types'

import styles from './Badge.module.scss'

const Badge = ({ icon }) => {
  return (
    <div className={styles.root}>
      <span>{icon}</span>
    </div>
  )
}

Badge.propTypes = {
  icon: PropTypes.any.isRequired,
}

export default Badge
