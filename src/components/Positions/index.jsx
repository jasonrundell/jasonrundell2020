import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// CSS
import styles from './Positions.module.scss'

const Positions = ({ data }) => {
  const allPositions = data.allMarkdownRemark.edges

  return (
    <>
      <ul className={styles.list}>
        {allPositions.map(position => {
          const {
            id,
            role,
            company,
            start_date,
            end_date,
          } = position.node.frontmatter
          return (
            <li key={id}>
              {role} {company}, {start_date}, {end_date}
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
        allMarkdownRemark(
          filter: { frontmatter: { parent_id: { eq: "positions" } } }
          sort: { order: ASC, fields: frontmatter___category }
        ) {
          edges {
            node {
              frontmatter {
                id
                parent_id
                role
                company
                start_date
                end_date
              }
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
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
