import React from 'react'
import { graphql } from 'gatsby'

import Components from '../components'

const { Page, SEO, Layout, Typography, Skills } = Components
const { Row } = Layout
const { Title, Paragraph } = Typography

export default ({ data }) => {
  return (
    <Page title={data.site.siteMetadata.site_header}>
      <SEO
        title={`${data.site.siteMetadata.title} | Home`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <section>
        <Row>
          <Title>{data.site.siteMetadata.site_header}</Title>
        </Row>
        <Row>
          <Title level={2}>Full Stack Web Developer</Title>
        </Row>
        <Row>
          <Paragraph>
            Yo! I'm a developer who loves learning and using the latest in front
            end web development. My skill set includes experience with React,
            Node.js, Gulp, Grunt, PHP, MySQL, SASS, CSS, HTML, JavaScript, and
            Amazon Web Services (just to name a few).
          </Paragraph>
          <Paragraph>
            My love of building web experiences started in my high school’s
            library in 1997 with GeoCities and it’s been rewarding ever since!
            As you can imagine, with over 20 years of love for HTML, I have been
            a part of a wide variety of web projects: from iframes, to Flash,
            jQuery Mobile, and now ‘isomorphic JavaScript applications’.
            Whatever the latest trend is, I’m either deeply involved or
            experimenting with it in my spare time and imagining what’s next. My
            skills and experiences are deep, wide-ranging, and I am always
            seeking new best practices and methodologies. I embrace change,
            crave challenge, and love technology!
          </Paragraph>
        </Row>
      </section>
      <section>
        <Row>
          <Title>About</Title>
        </Row>
        <Row>
          <Paragraph>
            Determined in building the best digital products that I can be proud
            of. Committed to learning and sharing ideas with the team. Always
            trying to be the best I can be.
          </Paragraph>
        </Row>
        <Row>
          <Skills />
        </Row>
      </section>
      <section>
        <Row>
          <Title>Experience</Title>
        </Row>
        <Row>
          <Paragraph>POSITIONS GO HERE</Paragraph>
        </Row>
      </section>
      <section>
        <Row>
          <Title>References</Title>
        </Row>
        <Row>
          <Paragraph>REFERENCES GO HERE</Paragraph>
        </Row>
      </section>
      <section>
        <Row>
          <Title>Let's connect</Title>
        </Row>
        <Row>
          <ul>
            <li>
              <a href="mailto:contact@jasonrundell.com">
                contact@jasonrundell.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jasonrundell"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jasonrundell/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </Row>
      </section>
    </Page>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        site_header
        author
        lang
      }
    }
  }
`
