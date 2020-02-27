import React from 'react'
import PropTypes from 'prop-types'

import Blockquote from '../Blockquote'
import Footer from '../Footer'
import Cite from '../Cite'

const Quote = ({ children, footerPrefix, cite, footerAffix }) => {
  return (
    <Blockquote>
      {children}
      <Footer>
        {footerPrefix}
        {cite && <Cite>{cite}</Cite>}
        {footerAffix}
      </Footer>
    </Blockquote>
  )
}

Quote.propTypes = {
  children: PropTypes.any.isRequired,
  footerPrefix: PropTypes.any,
  cite: PropTypes.any,
  footerAffix: PropTypes.any,
}

export default Quote
