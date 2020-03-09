import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../../Badge'
import { classNames } from '../../../utils/css'

import styles from './BadgeList.module.scss'

const BadgeList = ({ list, isHorizontal }) => {
  const className = classNames(styles.root, isHorizontal && styles.horizontal)
  return (
    <ul className={className}>
      {list.map(item => (
        <li className={styles.listItem} key={item.id}>
          <Badge icon={item.icon} /> {item.label}
        </li>
      ))}
    </ul>
  )
}

BadgeList.defaultProps = {
  isHorizontal: false,
}

BadgeList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default BadgeList
