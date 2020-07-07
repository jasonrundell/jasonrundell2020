import React from 'react'
import PropTypes from 'prop-types'

import { classNames } from '../../../utils/css'

import styles from './UnorderedList.module.scss'

const UnorderedList = ({ list, children, isHorizontal }) => {
  const classes = classNames(styles.root, isHorizontal && styles.horizontal)
  return (
    <ul className={classes}>
      {list.map((item, index) => (
        <li className={styles.listItem} key={index}>
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
