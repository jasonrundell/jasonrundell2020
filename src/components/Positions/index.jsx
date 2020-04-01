import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

// CSS
import styles from './Positions.module.scss'

const { Title } = Typography

const Positions = ({ positions }) => {
  return (
    <ul className={styles.list}>
      {positions.map(position => {
        const { id, role, company, startDate, endDate } = position
        return (
          <li key={id} className={styles.item}>
            <Title level={2}>{role}</Title>
            <span className={styles.company}>{company}</span>
            <br />
            <span className={styles.startDate}>{startDate}</span> -{' '}
            <span className={styles.endDate}>{endDate}</span>
          </li>
        )
      })}
    </ul>
  )
}

Positions.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Positions
