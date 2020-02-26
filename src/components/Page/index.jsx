import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Main from '../Main'
import Footer from '../Footer'

// import styles from './Page.module.scss'

const Page = ({ children }) => {
  return (
    <>
      <SkipToMain />
      <Main>{children}</Main>
      <Footer>
        Jason Rundell © {new Date().getFullYear()}. All rights reserved.
      </Footer>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
