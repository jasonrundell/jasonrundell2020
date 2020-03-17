import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Blockquote from '../Blockquote'
import Contentful from '../Contentful'

// CSS
import styles from './References.module.scss'

const { RichText } = Contentful

const References = ({ data }) => {
  const allReferences = data.allContentfulReferences.edges

  return (
    <>
      <ul className={styles.list}>
        {allReferences.map(reference => {
          const { id, citeName, company } = reference.node
          const quote = reference.node.quote.json

          return (
            <li key={id} className={styles.item}>
              <Blockquote>
                <RichText>{quote}</RichText>
              </Blockquote>
              <cite className={styles.cite}>
                - {citeName} ({company})
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
        allContentfulReferences(sort: { fields: id }) {
          edges {
            node {
              id
              quote {
                json
              }
              citeName
              company
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
    allContentfulReferences: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
