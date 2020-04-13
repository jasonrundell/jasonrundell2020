import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import Typography from '../Typography'
import Layout from '../Layout'
import Links from '../Links'
import DownloadResumeButton from '../DownloadResumeButton'

import styles from './Page.module.scss'

const { Paragraph } = Typography
const { Box, Container } = Layout
const { ExternalLink } = Links

const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      <SkipToMain />
      <Header>
        <Container>
          <Box>
            <DownloadResumeButton />
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
                  Site design by{' '}
                  <ExternalLink
                    url="https://donnavitan.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Donna Vitan
                  </ExternalLink>
                  ❤️. Jason Rundell © {new Date().getFullYear()}. All rights
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
  children: PropTypes.array.isRequired,
}

export default Page
