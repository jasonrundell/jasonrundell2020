import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'
import Typography from '../Typography'
import { onlyUnique } from '../../utils/unique'

// CSS
import styles from './Skills.module.scss'

const { Box, Grid, Row } = Layout
const { Title } = Typography

const Skills = ({ skills }) => {
  let categories = []

  // build array of categories
  skills.forEach((category) => {
    categories.push(category.category)
  })

  // I only want the unique categories
  const uniqueCategories = categories.filter(onlyUnique)

  return (
    <>
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
                  {skills.map((item) => {
                    const { id, name, category } = item

                    if (parentCategory === category) {
                      return (
                        <li key={id} className={styles.item}>
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
    })
  ).isRequired,
}

export default Skills
