import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Layout, Links, Page, Section, Seo, Typography } from '../components'

const DockerPage = ({ data }) => {
  const { Box, Container, Row, Spacer } = Layout
  const { Title } = Typography
  const { ExternalLink } = Links

  return (
    <Page title={data.site.siteMetadata.site_header}>
      <Seo
        title={`Jason Rundell - Full Stack Toronto Web Developer | Docker Presentation`}
        description={`Check out my 2023 presentation on using Docker for Local Development`}
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
              <ExternalLink
                url="https://docker-presentation-2023.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Docker for Local Development - 2023 Presentation
              </ExternalLink>
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

export default DockerPage

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        site_name
      }
    }
  }
`
