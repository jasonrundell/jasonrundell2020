import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import { Paragraph } from '../Typography'
import { Box, Container } from '../Layout'
import { ExternalLink } from '../Links'
import DownloadResumeButton from '../DownloadResumeButton'

import { root } from './Page.module.scss'

const Page = ({ children }) => {
  return (
    <div className={root}>
      <SkipToMain>Skip to main content</SkipToMain>
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
                  reserved. Hosted on{' '}
                  <ExternalLink
                    url="https://vercel.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Vercel
                  </ExternalLink>
                  .
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
