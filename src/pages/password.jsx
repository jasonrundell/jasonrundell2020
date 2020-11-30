import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { generatePassword } from '../utils/unique'

// Components
import Components from '../components'

const { Layout, Links, Page, Section, SEO, Typography, Button } = Components
const { Box, Container, Row, Spacer } = Layout
const { Title, Paragraph } = Typography
const { ExternalLink } = Links
const GeneratePassword = generatePassword

export default ({ data }) => {
  const thePasswordLength = 24

  const [thePassword, setThePassword] = useState(thePasswordLength)

  const handleUpdatePassword = (passwordLength) => {
    setThePassword(1)
    setTimeout(() => {
      setThePassword(passwordLength)
    }, 100)
  }

  return (
    <Page title={data.site.siteMetadata.site_header}>
      <SEO
        title={`Jason Rundell - Full Stack Toronto Web Developer | Home | Home`}
        description={`Password generator I like to use personally because I can trust it :)`}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <Section id="intro">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>{data.site.siteMetadata.site_name}</Title>
            </Row>
            <Row>
              <Title level={2}>
                {thePasswordLength} Character Password Generator
              </Title>
            </Row>
            <Row>
              <Paragraph>
                <code>
                  <GeneratePassword passwordLength={thePassword} />
                </code>
              </Paragraph>
            </Row>
            <Row>
              <Button onClick={() => handleUpdatePassword(thePasswordLength)}>
                Reload
              </Button>
            </Row>
          </Box>
        </Container>
        <Spacer sizeLarge="largest" />
      </Section>
      <Section id="contact" className="background__prime--darker">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Let's connect</Title>
            </Row>
            <Row>
              <ul>
                <li>
                  <ExternalLink url="mailto:contact@jasonrundell.com">
                    contact@jasonrundell.com
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    url="https://github.com/jasonrundell"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    url="https://www.linkedin.com/in/jasonrundell/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </ExternalLink>
                </li>
              </ul>
            </Row>
          </Box>
        </Container>
      </Section>
    </Page>
  )
}

export const pageQuery = graphql`
  query PagePasswordQuery {
    site {
      siteMetadata {
        author
        site_name
      }
    }
  }
`
