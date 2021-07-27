import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

import {
  list,
  item,
  company as companyStyle,
  startDate as startDateStyle,
  endDate as endDateStyle,
} from './Positions.module.scss'

const { Title } = Typography

const Positions = ({ positions }) => {
  return (
    <ul className={list}>
      {positions.map((position) => {
        const { id, role, company, startDate, endDate } = position
        return (
          <li key={id} className={item}>
            <Title level={2}>{role}</Title>
            <span className={companyStyle}>{company}</span>
            <br />
            <span className={startDateStyle}>{startDate}</span> -{' '}
            <span className={endDateStyle}>{endDate}</span>
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
