import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Main from '../Main'
import Footer from '../Footer'
import Typography from '../Typography'

import styles from './Page.module.scss'

const { Paragraph } = Typography

const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      <SkipToMain />
      <Main>{children}</Main>
      <Footer>
        <Paragraph>
          Jason Rundell © {new Date().getFullYear()}. All rights reserved.
        </Paragraph>
      </Footer>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
