import * as React from 'react'
import { graphql } from 'gatsby'

// components
import {
  Layout,
  Links,
  Page,
  Positions,
  References,
  Section,
  Seo,
  Skills,
  Typography,
} from '../components'

import { edgesToObject } from '../utils/graphql'

// markup
const HomePage = ({ data }) => {
  const { Box, Container, Row, Spacer } = Layout
  const { Title, Paragraph } = Typography
  const { ExternalLink } = Links
  const positions = edgesToObject(data.allContentfulPositions.edges)
  const skills = edgesToObject(data.allContentfulSkills.edges)
  const references = edgesToObject(data.allContentfulReferences.edges)

  return (
    <Page title={data.site.siteMetadata.site_header}>
      <Seo
        title={`Jason Rundell - Full Stack Toronto Web Developer | Home`}
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
              <Title level={2}>Full Stack Web Developer (for hire!)</Title>
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
                My love of building web experiences started in my high school's
                library in 1997 with GeoCities and it's been rewarding ever
                since! As you can imagine, with over 20 years of love for the
                web, I have been a part of a wide variety of web projects: from
                iframes, to Flash, WordPress multisites, jQuery Mobile, custom
                CMS applications, a Facebook contest platform, React design
                systems, and now Jamstack with headless CMS integration.
                Whatever the latest trend is, I'm either deeply involved or
                experimenting with it in my spare time. My skills and
                experiences are deep, wide-ranging, and I am always seeking new
                best practices and methodologies. I embrace change, crave
                challenge, and love technology!
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                🗓️{' '}
                <ExternalLink url="https://calendly.com/jason-rundell/30min">
                  Book time with me
                </ExternalLink>
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                👀{' '}
                <ExternalLink url="https://github.com/jasonrundell?tab=repositories&q=&type=&language=&sort=">
                  Check out my open-source work on GitHub
                </ExternalLink>
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
              <Skills skills={skills} />
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
              <Positions positions={positions} />
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
              <References references={references} />
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

export default HomePage

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        site_name
      }
    }
    allContentfulSkills(sort: { fields: category }) {
      edges {
        node {
          id
          category
          name
        }
      }
    }
    allContentfulPositions(sort: { fields: orderId, order: DESC }) {
      edges {
        node {
          id
          orderId
          role
          company
          startDate
          endDate
        }
      }
    }
    allContentfulReferences(sort: { fields: id }) {
      edges {
        node {
          id
          quote {
            raw
          }
          citeName
          company
        }
      }
    }
  }
`
