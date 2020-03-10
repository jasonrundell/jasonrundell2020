import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Blockquote from '../Blockquote'

// CSS
import styles from './References.module.scss'

const References = ({ data }) => {
  const allReferences = data.allMarkdownRemark.edges

  return (
    <>
      <ul className={styles.list}>
        {allReferences.map(position => {
          const { id, quote, cite_name, company } = position.node.frontmatter
          return (
            <li key={id} className={styles.item}>
              <Blockquote>{quote}</Blockquote>
              <cite>
                - {cite_name} ({company})
              </cite>
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
          filter: { frontmatter: { parent_id: { eq: "references" } } }
          sort: { order: ASC, fields: frontmatter___category }
        ) {
          edges {
            node {
              frontmatter {
                id
                parent_id
                quote
                cite_name
                company
              }
            }
          }
        }
      }
    `}
    render={data => <References data={data} {...props} />}
  />
)
References.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
