import React from 'react'
import PropTypes from 'prop-types'

import styles from './UnorderedList.module.scss'

const UnorderedList = ({ items, children }) => {
  return (
    <ul className={styles.root}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {item}{children}
        </li>
      ))}
    </ul>
  )
}

UnorderedList.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.any
}

export default UnorderedList
