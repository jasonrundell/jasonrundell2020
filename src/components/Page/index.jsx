import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import Typography from '../Typography'
import Layout from '../Layout'
import Lists from '../Lists'

import styles from './Page.module.scss'

const { Paragraph } = Typography
const { Box, Container } = Layout
const { UnorderedList } = Lists

const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      <SkipToMain />
      <Header>
        <Container>
          <Box>
            <UnorderedList
              items={[
                'Home',
                'Tools & Techniques',
                'Experience',
                'References',
                'Contact',
                'Download Resume',
              ]}
              isHorizontal
            />
          </Box>
        </Container>
      </Header>
      <Main>{children}</Main>
      <div className="background__prime--darker">
        <Footer>
          <Container>
            <Box>
              <Paragraph>
                <small>
                  Jason Rundell © {new Date().getFullYear()}. All rights
                  reserved.
                </small>
              </Paragraph>
            </Box>
          </Container>
        </Footer>
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
