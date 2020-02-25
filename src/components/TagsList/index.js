import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

import styles from './TagsList.module.scss'

const TagsList = ({ tags = [] }) => (
  <ul className={styles.root}>
    {tags.map(tag => (
      <li className={styles.listItem} key={tag}>
        <Tag>{tag}</Tag>
      </li>
    ))}
  </ul>
)

TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default TagsList
