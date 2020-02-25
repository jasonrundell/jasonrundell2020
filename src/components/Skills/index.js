import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import TagsList from '../TagsList'

const Skills = ({ data }) => {
  console.log('data', data)
  return <TagsList tags={data.markdownRemark.frontmatter.skills} />
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { id: { eq: "skills" } }) {
          id
          frontmatter {
            id
            skills
          }
        }
      }
    `}
    render={data => <Skills data={data} {...props} />}
  />
)
Skills.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        skills: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
