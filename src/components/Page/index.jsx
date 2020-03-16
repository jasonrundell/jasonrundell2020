import React from 'react'
import PropTypes from 'prop-types'

import SkipToMain from '../SkipToMain'
import Main from '../Main'
import Footer from '../Footer'
import Typography from '../Typography'
import Layout from '../Layout'

const { Paragraph } = Typography
const { Box, Container } = Layout

const Page = ({ children }) => {
  return (
    <>
      <SkipToMain />
      <Main>{children}</Main>
      <div className="background__prime--darker">
        <Footer>
          <Container isContained isCentered>
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
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
