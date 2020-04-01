import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'
import Badge from '../Badge'
import Lists from '../Lists'
import Typography from '../Typography'
import onlyUnique from '../../utils/unique'

// CSS
import styles from './Skills.module.scss'

const { Box, Grid, Row } = Layout
const { BadgeList } = Lists
const { Title } = Typography

const Skills = ({ skills }) => {
  let categories = []

  // build array of categories
  skills.forEach(category => {
    categories.push(category.category)
  })

  // I only want the unique categories
  const uniqueCategories = categories.filter(onlyUnique)

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
          mediumColumnCount={2}
          largeColumnCount={3}
          breakInside="avoid"
        >
          {uniqueCategories.map((parentCategory, index) => {
            return (
              <div key={index} className={styles.list}>
                <Title level={2}>{parentCategory}</Title>
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

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      expertiseLevel: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Skills
