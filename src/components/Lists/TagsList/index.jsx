import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../../Tag'

import styles from './TagsList.module.scss'

const TagsList = ({ tags, orderBy }) => {
  // TODO: Array sort
  return (
    <ul className={styles.root}>
      {tags.map(tag => (
        <li className={styles.listItem} key={tag.id}>
          <Tag text={tag.text} />
        </li>
      ))}
    </ul>
  )
}

TagsList.defaultProps = {
  orderBy: 'ASC',
}

TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
  orderBy: PropTypes.oneOf(['ASC', 'DESC']),
}

export default TagsList
