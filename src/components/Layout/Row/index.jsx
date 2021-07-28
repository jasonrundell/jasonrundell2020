import React from 'react'
import PropTypes from 'prop-types'

import { justifyRules } from './prop-rules'

import { classNames } from '../../../utils/css'

import {
  root as rootStyle,
  start as justifyStart,
  end as justifyEnd,
  center as justifyCenter,
  spaceAround as justifySpaceAround,
  spaceBetween as justifySpaceBetween,
  spaceEvenly as justifySpaceEvenly,
} from './Row.module.scss'

const Row = ({ justify, children }) => {
  const classes = classNames(
    rootStyle,
    justify === 'start' && justifyStart,
    justify === 'end' && justifyEnd,
    justify === 'center' && justifyCenter,
    justify === 'space-around' && justifySpaceAround,
    justify === 'space-between' && justifySpaceBetween,
    justify === 'space-evenly' && justifySpaceEvenly
  )

  return <div className={classes}>{children}</div>
}

Row.defaultProps = {
  justify: justifyRules[0],
}

Row.propTypes = {
  justify: PropTypes.oneOf(justifyRules),
  children: PropTypes.any.isRequired,
}

export default Row
