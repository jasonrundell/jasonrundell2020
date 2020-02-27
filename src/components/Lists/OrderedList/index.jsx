import React from 'react'
import PropTypes from 'prop-types'

import styles from './OrderedList.module.scss'

const OrderedList = ({ items, children }) => {
  return (
    <ol className={styles.root}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {item}{children}
        </li>
      ))}
    </ol>
  )
}

OrderedList.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.any
}

export default OrderedList
