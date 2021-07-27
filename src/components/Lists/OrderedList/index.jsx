import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import { root, horizontal, listItem } from './OrderedList.module.scss'

const OrderedList = ({ list, children, isHorizontal }) => {
  const classes = classNames(root, isHorizontal && horizontal)
  return (
    <ol className={classes}>
      {list.map((item, index) => (
        <li className={listItem} key={index}>
          {item}
          {children}
        </li>
      ))}
    </ol>
  )
}

OrderedList.defaultProps = {
  isHorizontal: false,
}

OrderedList.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.any,
  isHorizontal: PropTypes.bool,
}

export default OrderedList
