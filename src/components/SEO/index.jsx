import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Seo = (props) => (
  <Helmet
    htmlAttributes={{
      lang: props.lang,
    }}
    title={props.title}
    meta={[
      {
        name: `description`,
        content: props.description,
      },
      {
        property: `og:title`,
        content: props.title,
      },
      {
        property: `og:description`,
        content: props.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: props.author,
      },
      {
        name: `twitter:title`,
        content: props.title,
      },
      {
        name: `twitter:description`,
        content: props.description,
      },
    ].concat(props.meta)}
    bodyAttributes={{
      class: 'theme__vitan',
    }}
  >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </Helmet>
)

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  author: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
