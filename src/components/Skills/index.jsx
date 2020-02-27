import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Lists from '../Lists'

const { UnorderedList } = Lists

const Skills = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const allSkills = [...edges]
  let categories = []
  let skills = []

  allSkills.forEach(category => {
    categories.push(category.node.frontmatter.category)
  })

  allSkills.forEach(skill => {
    skills.push(skill.node.frontmatter)
  })

  return (
    <UnorderedList items={categories}>
      <ul>
        {skills.map(item => (
          <li key={item.id}>
            {item.name} / {item.years_of_experience} / {item.expertise_level}
          </li>
        ))}
      </ul>
    </UnorderedList>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { parent_id: { eq: "skills" } } }
          sort: { order: ASC, fields: frontmatter___category }
        ) {
          edges {
            node {
              frontmatter {
                category
                id
                name
                parent_id
                expertise_level
                years_of_experience
              }
            }
          }
        }
      }
    `}
    render={data => <Skills data={data} {...props} />}
  />
)
Skills.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
