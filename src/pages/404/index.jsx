import React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../../components/Page'
import SEO from '../../components/SEO'

export default ({ data }) => (
  <Page title={data.site.siteMetadata.title}>
    <SEO
      title={`404 Page not found`}
      description={`404 Page not found`}
      author={data.site.siteMetadata.author}
      lang={`en-CA`}
    />
    <h1>Not found</h1>
    <p>Sorry folks, nothing here to see.</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        site_name
      }
    }
  }
`
