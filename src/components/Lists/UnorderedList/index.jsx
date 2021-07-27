import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import { root, horizontal, listItem } from './UnorderedList.module.scss'

const UnorderedList = ({ list, children, isHorizontal }) => {
  const classes = classNames(root, isHorizontal && horizontal)
  return (
    <ul className={classes}>
      {list.map((item, index) => (
        <li className={listItem} key={index}>
          {item}
          {children}
        </li>
      ))}
    </ul>
  )
}

UnorderedList.defaultProps = {
  isHorizontal: false,
}

UnorderedList.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.any,
  isHorizontal: PropTypes.bool,
}

export default UnorderedList
