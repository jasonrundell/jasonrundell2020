import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../../Badge'
import { Box } from '../../Layout'

import { classNames } from '../../../utils/css'

import { root, horizontal, listItem } from './BadgeList.module.scss'

const BadgeList = ({ list, isHorizontal, isInverse }) => {
  const classes = classNames(root, isHorizontal && horizontal)
  return (
    <ul className={classes}>
      {list.map((item) => (
        <li className={listItem} key={item.id}>
          <Box isTight>
            <Badge icon={item.icon} isInverse={isInverse} />
          </Box>
          <Box isTight>
            <span>{item.label}</span>
          </Box>
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
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  isHorizontal: PropTypes.bool,
  isInverse: PropTypes.bool,
}

export default BadgeList
