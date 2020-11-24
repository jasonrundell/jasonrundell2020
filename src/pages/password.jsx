import React from 'react'
import { graphql } from 'gatsby'
import { generatePassword } from '../utils/unique'

// Components
import Components from '../components'

const { Layout, Links, Page, Section, SEO, Typography } = Components
const { Box, Container, Row, Spacer } = Layout
const { Title, Paragraph } = Typography
const { ExternalLink } = Links
const GenberatePassword = generatePassword

export default ({ data }) => {
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
              <Title level={2}>Password Generator</Title>
            </Row>
            <Row>
              <Paragraph>8, 12, 16, 24</Paragraph>
              <Paragraph>
                <code>
                  <GenberatePassword passwordLength={8} />
                </code>
              </Paragraph>
              <Paragraph>
                <code>
                  <GenberatePassword passwordLength={12} />
                </code>
              </Paragraph>
              <Paragraph>
                <code>
                  <GenberatePassword passwordLength={16} />
                </code>
              </Paragraph>
              <Paragraph>
                <code>
                  <GenberatePassword passwordLength={24} />
                </code>
              </Paragraph>
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
