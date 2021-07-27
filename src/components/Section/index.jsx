import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../utils/css'

// CSS
import { root } from './Section.module.scss'

const Section = ({ id, children, className }) => {
  const classes = classNames(root, className)

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

Section.defaultProps = {
  id: null,
  className: null,
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default Section
