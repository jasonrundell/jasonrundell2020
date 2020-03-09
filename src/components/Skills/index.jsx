import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Badge from '../Badge'
import Lists from '../Lists'
import onlyUnique from '../../utils/unique'

// CSS
import styles from './Skills.module.scss'

const { BadgeList } = Lists

const Skills = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const allSkills = [...edges]
  let categories = []
  let skills = []

  allSkills.forEach(category => {
    categories.push(category.node.frontmatter.category)
  })

  // I only want the unique categories
  const uniqueCategories = categories.filter(onlyUnique)

  allSkills.forEach(skill => {
    skills.push(skill.node.frontmatter)
  })

  const legendList = [
    {
      id: 'expert',
      icon: 'E',
      label: 'Expert',
    },
    {
      id: 'advanced',
      icon: 'A',
      label: 'Advanced',
    },
    {
      id: 'proficient',
      icon: 'P',
      label: 'Proficient',
    },
    {
      id: 'intermediate',
      icon: 'I',
      label: 'Intermediate',
    },
  ]

  return (
    <>
      <BadgeList list={legendList} isHorizontal />
      {uniqueCategories.map((parentCategory, index) => {
        return (
          <ul key={index} className={styles.list}>
            <li>
              <h3 className={styles.title}>{parentCategory}</h3>
              <ul className={styles.list}>
                {skills.map(item => {
                  const { id, name, category, expertise_level } = item

                  if (parentCategory === category) {
                    return (
                      <li key={id} className={styles.item}>
                        <Badge icon={expertise_level} />
                        <span className={styles.itemText}>{name}</span>
                      </li>
                    )
                  } else {
                    return null
                  }
                })}
              </ul>
            </li>
          </ul>
        )
      })}
    </>
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
