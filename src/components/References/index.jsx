import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../Blockquote'
import Contentful from '../Contentful'

// CSS
import styles from './References.module.scss'

const { RichText } = Contentful

const References = ({ references }) => {
  return (
    <>
      <ul className={styles.list}>
        {references.map(reference => {
          const { id, citeName, company } = reference
          const quote = reference.quote.json

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

References.propTypes = {
  references: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      quote: PropTypes.shape({ json: PropTypes.json }).isRequired,
      citeName: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default References
