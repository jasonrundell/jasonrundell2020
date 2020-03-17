import React from 'react'
import { graphql } from 'gatsby'

import Components from '../components'

const {
  Layout,
  Links,
  Page,
  Positions,
  References,
  Section,
  SEO,
  Skills,
  Typography,
} = Components
const { Box, Container, Row, Spacer } = Layout
const { Title, Paragraph } = Typography
const { ExternalLink } = Links

export default ({ data }) => {
  return (
    <Page title={data.site.siteMetadata.site_header}>
      <SEO
        title={`Jason Rundell - Full Stack Toronto Web Developer | Home | Home`}
        description={`The official web site of Jason Rundell: A full stack web developer that loves the web!`}
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
              <Title level={2}>Full Stack Web Developer</Title>
            </Row>
            <Row>
              <Paragraph>
                Hello. I'm a developer who loves learning and using the latest
                in front end web development. My skill set includes experience
                with React, Gatsby, AEM, Contentful, WordPress, Git, Gulp,
                Grunt, Parcel, PHP, MySQL, SASS, CSS, HTML, JavaScript, and
                Amazon Web Services.
              </Paragraph>
              <Paragraph>
                My love of building web experiences started in my high school’s
                library in 1997 with GeoCities and it’s been rewarding ever
                since! As you can imagine, with over 20 years of love for the
                web, I have been a part of a wide variety of web projects: from
                iframes, to Flash, WordPress multisites, jQuery Mobile, custom
                CMS applications, a Facebook contest platform, React design
                systems, and now JAMstack with Gatsby and headless CMSs.
                Whatever the latest trend is, I’m either deeply involved or
                experimenting with it in my spare time. My skills and
                experiences are deep, wide-ranging, and I am always seeking new
                best practices and methodologies. I embrace change, crave
                challenge, and love technology!
              </Paragraph>
            </Row>
          </Box>
        </Container>
        <Spacer sizeLarge="largest" />
      </Section>
      <Section id="tools-and-tech" className="background__prime--dark">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Tools &amp; Technologies</Title>
            </Row>
            <Row>
              <Paragraph>
                Determined in building the best digital products that I can be
                proud of. Committed to learning and sharing ideas with the team.
                Always trying to be the best I can be.
              </Paragraph>
            </Row>
            <Row>
              <Skills />
            </Row>
          </Box>
        </Container>
      </Section>
      <Section id="experience" className="background__prime--dark">
        <Container>
          <Box>
            <Row>
              <Title>Experience</Title>
            </Row>
            <Row>
              <Paragraph>
                Logos of: LoyaltyOne, Intuit, AIR MILES, QuickBooks, Flight
                Centre
              </Paragraph>
            </Row>
            <Row>
              <Positions />
            </Row>
          </Box>
        </Container>
      </Section>
      <Section id="references" className="background__prime--dark">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>References</Title>
            </Row>
            <Row>
              <References />
            </Row>
          </Box>
        </Container>
      </Section>
      {/* <Section id="quotes">
      <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Quotes</Title>
            </Row>
            <Row>
              <Quote
                footerPrefix={`This thought just came out of me one day and I'm not sure who said it first. If you know, please do inform me!`}
              >
                <Paragraph>The first media query is no media query.</Paragraph>
              </Quote>
            </Row>
          </Box>
        </Container>
      </Section> */}
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
  query IndexQuery {
    site {
      siteMetadata {
        author
        site_name
      }
    }
  }
`
