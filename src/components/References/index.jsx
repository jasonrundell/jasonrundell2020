import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../Blockquote'
import Contentful from '../Contentful'

// CSS
import { list, item, cite } from './References.module.scss'

const References = ({ references }) => {
  const { RichText } = Contentful

  return (
    <>
      <ul className={list}>
        {references.map((reference) => {
          const { id, citeName, company } = reference
          const quote = reference.quote.raw

          return (
            <li key={id} className={item}>
              <Blockquote>
                <RichText>{quote}</RichText>
              </Blockquote>
              <cite className={cite}>
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
