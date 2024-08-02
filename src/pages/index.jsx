import * as React from 'react'
import { graphql } from 'gatsby'

// components
import {
  Layout,
  Links,
  Page,
  Positions,
  References,
  Section,
  Seo,
  Skills,
  Typography,
} from '../components'

import { edgesToObject } from '../utils/graphql'
import { UnorderedList } from '../components/Lists'

// markup
const HomePage = ({ data }) => {
  const { Box, Container, Row, Spacer } = Layout
  const { Title, Paragraph } = Typography
  const { ExternalLink } = Links
  const positions = edgesToObject(data.allContentfulPositions.edges)
  const skills = edgesToObject(data.allContentfulSkills.edges)
  const references = edgesToObject(data.allContentfulReferences.edges)

  return (
    <Page title={data.site.siteMetadata.site_header}>
      <Seo
        title={`Jason Rundell - Engineering Manager / Full Stack Web Developer`}
        description={`The official web site of Jason Rundell: A full stack web developer that loves the web!`}
        author={data.site.siteMetadata.author}
        lang={data.site.siteMetadata.lang}
      />
      <Section id="intro">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>{data.site.siteMetadata.site_name}</Title>
            </Row>
            <Row>
              <Title level={2}>
                Engineering Manager / Full Stack Web Developer
              </Title>
            </Row>
            <Row>
              <Paragraph>
                I'm an experienced developer who loves learning and using the
                latest in front end web development, but I also have a wealth of
                experience and love for back end, dev ops, database design,
                component driven design, design systems, and aligning developer
                career growth with business goals as a manager or tech lead.
              </Paragraph>
              <Paragraph>
                My technical skill set includes experience with:
              </Paragraph>
              <ul className="no-t-margin">
                <li>Docker</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Gatsby</li>
                <li>Contentful</li>
                <li>Cypress</li>
                <li>Chromatic</li>
                <li>Figma</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>CSS & SASS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Amazon Web Services</li>
                <li>Sentry.io</li>
                <li>
                  Understanding of scalable web architecture (micro and
                  monolith)
                </li>
                <li>
                  Familiarity with DevOps practices (CI/CD, monitoring, logging)
                </li>
                <li>
                  Knowledge of continuous integration and continuous deployment
                  tools (Jenkins, GitHub Actions, CircleCI)
                </li>
                <li>
                  Understanding of web security principles (OWASP, CORS, CSRF)
                </li>
                <li>Web accessibility (WCAG, ARIA)</li>
                <li>
                  Experience in implementing secure authentication and
                  authorization mechanisms (OAuth, JWT)
                </li>
                <li>
                  Skills in optimizing web applications for speed and
                  scalability (Lighthouse, WebPageTest)
                </li>
                <li>
                  SEO (Search Engine Optimization) practices and implementation
                  Google Analytics and Google Tag Manager
                </li>
              </ul>
              <Paragraph>
                On the management side, I possess many strong capabilities:
              </Paragraph>
              <Title level={3}>Management and Leadership Skills</Title>
              <ul className="no-t-margin">
                <li>
                  Project Management
                  <ul>
                    <li>
                      Proficiency in project management methodologies (Agile,
                      Scrum, Kanban).
                    </li>
                    <li>
                      Ability to manage timelines, budgets, and resources.
                    </li>
                  </ul>
                </li>
                <li>
                  Team Leadership
                  <ul>
                    <li>Strong leadership and team-building skills.</li>
                    <li>Ability to mentor and develop team members.</li>
                  </ul>
                </li>
                <li>
                  Communication
                  <ul>
                    <li>Excellent verbal and written communication skills.</li>
                    <li>
                      Ability to communicate technical concepts to non-technical
                      stakeholders.
                    </li>
                  </ul>
                </li>
                <li>
                  Problem-Solving
                  <ul>
                    <li>Strong analytical and problem-solving abilities.</li>
                    <li>Ability to troubleshoot complex technical issues.</li>
                  </ul>
                </li>
              </ul>
              <Title level={3}>Strategic and Business Skills</Title>
              <ul className="no-t-margin">
                <li>
                  Product Management
                  <ul>
                    <li>
                      Understanding of product lifecycle and user-centered
                      design.
                    </li>
                    <li>
                      Ability to prioritize features based on business value and
                      user feedback.
                    </li>
                  </ul>
                </li>
                <li>
                  Stakeholder Management
                  <ul>
                    <li>Skills in managing relationships with stakeholders.</li>
                    <li>
                      Ability to align technical efforts with business goals.
                    </li>
                  </ul>
                </li>
                <li>
                  Budgeting and Cost Management
                  <ul>
                    <li>
                      Experience in managing budgets and financial planning.
                    </li>
                  </ul>
                </li>
              </ul>
              <Title level={3}>Personal Attributes</Title>
              <ul className="no-t-margin">
                <li>
                  Adaptability
                  <ul>
                    <li>
                      Ability to adapt to new technologies and changing business
                      needs.
                    </li>
                  </ul>
                </li>
                <li>
                  Empathy
                  <ul>
                    <li>
                      Understanding and addressing the needs and concerns of
                      team members and stakeholders.
                    </li>
                  </ul>
                </li>
                <li>
                  Visionary Thinking
                  <ul>
                    <li>
                      Ability to envision the future of web technology and steer
                      the team towards it.
                    </li>
                  </ul>
                </li>
                <li>
                  Ethical Judgement
                  <ul>
                    <li>
                      Maintaining high ethical standards in all aspects of work.
                    </li>
                  </ul>
                </li>
              </ul>
              <Title level={3}>Enhancing Organizational Documentation</Title>
              <ul className="no-t-margin">
                <li>
                  Establishing Documentation Standards
                  <ul>
                    <li>
                      Develop and enforce documentation standards and best
                      practices.
                    </li>
                    <li>
                      Ensure consistency in tone, style, and format across all
                      documentation.
                    </li>
                  </ul>
                </li>
                <li>
                  Creating Comprehensive Technical Documentation
                  <ul>
                    <li>
                      Write and maintain detailed technical documentation for
                      systems, processes, and applications.
                    </li>
                    <li>
                      Ensure documentation is easily understandable for both
                      technical and non-technical stakeholders.
                    </li>
                  </ul>
                </li>
                <li>
                  Implementing Documentation Tools and Systems
                  <ul>
                    <li>
                      Select and implement appropriate documentation tools and
                      platforms (e.g., Confluence, GitHub Wikis).
                    </li>
                    <li>
                      Ensure documentation is easily accessible and searchable.
                    </li>
                  </ul>
                </li>
                <li>
                  Training and Mentoring Team Members
                  <ul>
                    <li>
                      Train team members on how to create and maintain
                      high-quality documentation.
                    </li>
                    <li>
                      Encourage a culture of documentation within the team.
                    </li>
                  </ul>
                </li>
                <li>
                  Ensuring Up-to-Date Documentation
                  <ul>
                    <li>
                      Regularly review and update documentation to reflect
                      changes in technology, processes, or best practices.
                    </li>
                    <li>
                      Implement version control for documentation to track
                      changes and updates.
                    </li>
                  </ul>
                </li>
                <li>
                  Collaborating with Cross-Functional Teams
                  <ul>
                    <li>
                      Work with product managers, developers, designers, and
                      other stakeholders to gather information and ensure
                      comprehensive documentation.
                    </li>
                    <li>
                      Facilitate communication and knowledge sharing between
                      teams through clear and concise documentation.
                    </li>
                  </ul>
                </li>
                <li>
                  Fostering User-Centric Documentation
                  <ul>
                    <li>
                      Create user manuals, guides, and FAQs that address common
                      user needs and issues.
                    </li>
                    <li>
                      Use feedback from users to continuously improve
                      documentation quality and relevance.
                    </li>
                  </ul>
                </li>
                <li>
                  Automating Documentation Processes
                  <ul>
                    <li>
                      Implement tools and scripts to automate the generation of
                      documentation where possible (e.g., API documentation).
                    </li>
                    <li>
                      Ensure that automated documentation is accurate and
                      up-to-date.
                    </li>
                  </ul>
                </li>
                <li>
                  Documenting Best Practices and Lessons Learned
                  <ul>
                    <li>
                      Capture and document best practices, lessons learned, and
                      knowledge from past projects.
                    </li>
                    <li>
                      Create a knowledge base that can be referenced for future
                      projects and training.
                    </li>
                  </ul>
                </li>
                <li>
                  Measuring Documentation Effectiveness
                  <ul>
                    <li>
                      Collect feedback from users and stakeholders to assess the
                      effectiveness of documentation.
                    </li>
                    <li>
                      Use metrics and KPIs to continuously improve the quality
                      and usefulness of documentation.
                    </li>
                  </ul>
                </li>
              </ul>
              <Title level={2}>
                After 20 years, I still love working on the web
              </Title>
              <Paragraph>
                My passion for creating web experiences began in my high
                school's library back in 1997 when I discovered GeoCities. Since
                then, I've been fortunate to work on a diverse range of projects
                spanning multiple technologies, including iframes, Flash,
                WordPress multisites, jQuery Mobile, custom CMS applications, a
                Facebook contest platform, React design systems, Jamstack
                architecture, and most recently, exploration of the
                possibilities and limitations of automation, AI and AGI
                (Artificial General Intelligence). I am constantly exploring new
                trends and experimenting with emerging technologies in my spare
                time to expand my skills and knowledge. As a lifelong learner, I
                embrace change, seek out challenges, and thrive on the
                fast-paced nature of the tech industry.
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                🗓️{' '}
                <ExternalLink url="https://calendly.com/jason-rundell/30min">
                  Book time with me
                </ExternalLink>
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                👀{' '}
                <ExternalLink url="https://github.com/jasonrundell?tab=repositories&q=&type=&language=&sort=">
                  Check out my open-source work on GitHub
                </ExternalLink>
              </Paragraph>
            </Row>
          </Box>
        </Container>
        <Spacer sizeLarge="largest" />
      </Section>
      <Section id="tools-and-tech" className="background__prime--dark">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Tools &amp; Technologies</Title>
            </Row>
            <Row>
              <Paragraph>
                Determined in building the best digital products that I can be
                proud of. Committed to learning and sharing ideas with the team.
                Always trying to be the best I can be.
              </Paragraph>
            </Row>
            <Row>
              <Skills skills={skills} />
            </Row>
          </Box>
        </Container>
      </Section>
      <Section id="experience" className="background__prime--dark">
        <Container>
          <Box>
            <Row>
              <Title>Experience</Title>
            </Row>
            <Row>
              <Positions positions={positions} />
            </Row>
          </Box>
        </Container>
      </Section>
      <Section id="references" className="background__prime--dark">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>References</Title>
            </Row>
            <Row>
              <References references={references} />
            </Row>
          </Box>
        </Container>
      </Section>
      {/* <Section id="quotes">
      <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Quotes</Title>
            </Row>
            <Row>
              <Quote
                footerPrefix={`This thought just came out of me one day and I'm not sure who said it first. If you know, please do inform me!`}
              >
                <Paragraph>The first media query is no media query.</Paragraph>
              </Quote>
            </Row>
          </Box>
        </Container>
      </Section> */}
      <Section id="contact" className="background__prime--darker">
        <Spacer sizeLarge="largest" />
        <Container>
          <Box>
            <Row>
              <Title>Let's connect</Title>
            </Row>
            <Row>
              <ul>
                <li>
                  <ExternalLink url="mailto:contact@jasonrundell.com">
                    contact@jasonrundell.com
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    url="https://github.com/jasonrundell"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    url="https://www.linkedin.com/in/jasonrundell/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    rel="me"
                    url="https://mastodon.jasonrundell.com/@jason"
                    target="_blank"
                  >
                    Mastodon
                  </ExternalLink>
                </li>
              </ul>
            </Row>
          </Box>
        </Container>
      </Section>
    </Page>
  )
}

export default HomePage

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        site_name
      }
    }
    allContentfulSkills(sort: { fields: category }) {
      edges {
        node {
          id
          category
          name
        }
      }
    }
    allContentfulPositions(sort: { fields: orderId, order: DESC }) {
      edges {
        node {
          id
          orderId
          role
          company
          startDate
          endDate
        }
      }
    }
    allContentfulReferences(sort: { fields: id }) {
      edges {
        node {
          id
          quote {
            raw
          }
          citeName
          company
        }
      }
    }
  }
`
