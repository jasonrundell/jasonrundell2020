import React from 'react'
import PropTypes from 'prop-types'

import { root } from './ExternalLink.module.scss'

const ExternalLink = ({ url, rel, target, children }) => {
  return (
    <a href={url} rel={rel} target={target} className={root}>
      {children}
    </a>
  )
}

ExternalLink.defaultProps = {
  rel: null,
  target: null,
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
}

export default ExternalLink
