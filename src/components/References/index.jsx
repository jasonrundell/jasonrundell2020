import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Blockquote from '../Blockquote'

// CSS
import styles from './References.module.scss'

const References = ({ data }) => {
  const allReferences = data.allContentfulReferences.edges

  // console.log('REFERENCES', allReferences)

  return (
    <>
      <ul className={styles.list}>
        {allReferences.map(position => {
          const { id, citeName, company } = position.node
          const quote = position.node.quote.content[0].content[0].value
          // console.log(`${id}, ${quote}, ${citeName}, ${company}`)
          // console.log(quote.content[0].content[0].value)
          return (
            <li key={id} className={styles.item}>
              <Blockquote>{quote}</Blockquote>
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
                content {
                  content {
                    value
                  }
                }
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
