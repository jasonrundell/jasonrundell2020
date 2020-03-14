import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../Layout'
import Badge from '../Badge'
import Lists from '../Lists'
import onlyUnique from '../../utils/unique'

// CSS
import styles from './Skills.module.scss'

const { Box, Grid, Row } = Layout
const { BadgeList } = Lists

const Skills = ({ data }) => {
  const edges = data.allContentfulSkills.edges
  const allSkills = [...edges]
  let categories = []
  let skills = []

  allSkills.forEach(category => {
    categories.push(category.node.category)
  })

  // I only want the unique categories
  const uniqueCategories = categories.filter(onlyUnique)

  allSkills.forEach(skill => {
    skills.push(skill.node)
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
      <Row>
        <BadgeList list={legendList} isHorizontal isInverse />
      </Row>
      <Row>
        <Grid
          columnCount={1}
          mediumColumnCount={1}
          largeColumnCount={3}
          breakInside="avoid"
        >
          {uniqueCategories.map((parentCategory, index) => {
            return (
              <div key={index} className={styles.list}>
                <h3 className={styles.title}>{parentCategory}</h3>
                <ul className={styles.list}>
                  {skills.map(item => {
                    const { id, name, category, expertiseLevel } = item

                    if (parentCategory === category) {
                      return (
                        <li key={id} className={styles.item}>
                          <Box isTight>
                            <Badge icon={expertiseLevel} isInverse />
                          </Box>
                          <Box isTight>
                            <span className={styles.itemText}>{name}</span>
                          </Box>
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
            )
          })}
        </Grid>
      </Row>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSkills(sort: { fields: category }) {
          edges {
            node {
              id
              category
              name
              expertiseLevel
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
    allContentfulSkills: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}
