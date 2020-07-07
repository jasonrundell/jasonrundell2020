import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../../Tag'

import styles from './TagsList.module.scss'

const TagsList = ({ list, orderBy }) => {
  // TODO: Array sort
  return (
    <ul className={styles.root}>
      {list.map((item, index) => (
        <li className={styles.listItem} key={index}>
          <Tag text={item} />
        </li>
      ))}
    </ul>
  )
}

TagsList.defaultProps = {
  orderBy: 'ASC',
}

TagsList.propTypes = {
  list: PropTypes.array.isRequired,
  orderBy: PropTypes.oneOf(['ASC', 'DESC']),
}

export default TagsList
