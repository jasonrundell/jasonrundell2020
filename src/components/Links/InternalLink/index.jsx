import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { root } from './InternalLink.module.scss'

const InternalLink = ({ url, children }) => {
  return (
    <Link to={url} className={root}>
      {children}
    </Link>
  )
}

InternalLink.propTypes = {
  children: PropTypes.any.isRequired,
}

export default InternalLink
