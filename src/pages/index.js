import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Row } from 'antd'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const { Title, Paragraph } = Typography

export default ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.site_header}>
      <SEO
        title={`${data.site.siteMetadata.title} | Home`}
        description={data.site.siteMetadata.description}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <section>
        <Row type="flex">
          <Title>{data.site.siteMetadata.site_header}</Title>
        </Row>
        <Row type="flex" justify="center">
          <Title level={2}>Full Stack Web Developer</Title>
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
      <Row type="flex">
        <Title>About</Title>
      </Row>
      <Row type="flex" justify="center">
        <Title level={2}>Full Stack Web Developer</Title>
        <Paragraph>
          Determined in building the best digital products that I can be proud
          of. Committed to learning and sharing ideas with the team. Always
          trying to be the best I can be.
        </Paragraph>
        <Paragraph>SKILLS GO HERE</Paragraph>
      </Row>
    </Layout>
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
