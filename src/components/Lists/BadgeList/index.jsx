import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../../Badge'
import { classNames } from '../../../utils/css'

import styles from './BadgeList.module.scss'

const BadgeList = ({ list, isHorizontal, isInverse }) => {
  const className = classNames(styles.root, isHorizontal && styles.horizontal)
  return (
    <ul className={className}>
      {list.map(item => (
        <li className={styles.listItem} key={item.id}>
          <Badge icon={item.icon} isInverse={isInverse} /> {item.label}
        </li>
      ))}
    </ul>
  )
}

BadgeList.defaultProps = {
  isHorizontal: false,
  isInverse: false,
}

BadgeList.propTypes = {
  list: PropTypes.array.isRequired,
  isHorizontal: PropTypes.bool,
  isInverse: PropTypes.bool,
}

export default BadgeList
