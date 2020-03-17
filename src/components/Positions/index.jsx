import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Typography from '../Typography'

// CSS
import styles from './Positions.module.scss'

const { Title } = Typography

const Positions = ({ data }) => {
  const allPositions = data.allContentfulPositions.edges

  return (
    <>
      <ul className={styles.list}>
        {allPositions.map(position => {
          const { id, role, company, startDate, endDate } = position.node
          return (
            <li key={id} className={styles.item}>
              <Title level={4} className={styles.role}>
                {role}
              </Title>
              <span className={styles.company}>{company}</span>
              <br />
              <span className={styles.startDate}>{startDate}</span> -{' '}
              <span className={styles.endDate}>{endDate}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allContentfulPositions(sort: { fields: orderId, order: DESC }) {
          edges {
            node {
              id
              orderId
              role
              company
              startDate
              endDate
            }
          }
        }
      }
    `}
    render={data => <Positions data={data} {...props} />}
  />
)
Positions.propTypes = {
  data: PropTypes.shape({
    allContentfulPositions: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
