import React from 'react'
import PropTypes from 'prop-types'

import styles from './ExternalLink.module.scss'

const ExternalLink = ({ url, rel, target, children }) => {
  return (
    <a href={url} rel={rel} target={target} className={styles.root}>
      {children}
    </a>
  )
}

ExternalLink.defaultProps = {
  rel: null,
  target: null,
}

ExternalLink.propTypes = {
  children: PropTypes.any.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
}

export default ExternalLink
