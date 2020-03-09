import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './OrderedList.module.scss'

const OrderedList = ({ items, children, isHorizontal }) => {
  const className = classNames(styles.root, isHorizontal && styles.horizontal)
  return (
    <ol className={className}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
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
  items: PropTypes.array.isRequired,
  children: PropTypes.any,
  isHorizontal: PropTypes.bool,
}

export default OrderedList
