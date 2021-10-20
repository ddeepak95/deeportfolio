import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Button from "../components/_ui/Button"
import og_img from "images/og-img.jpg"
import colors from "../styles/colors"

const WorkAfter = styled("div")`
  text-align: center;
`

const WorkHead = styled("div")`
  margin-bottom: 3em;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0px;
  }
`

const WorkAction = styled(Link)`
  margin-bottom: 10px;
`

const Work = ({ projects, meta }) => (
  <>
    <Helmet
      title="Work"
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          name: `theme-color`,
          content: colors.blue600,
        },
        {
          property: `og:title`,
          content: `Work | ${meta.title}`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: og_img,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: `Work | ${meta.title}`,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <WorkHead>
        <h1>Work</h1>
        <p>
          Yay! Super glad that you’re interested in checking out my work. See
          some of the notable ones below
          <span role="img" aria-label="down-emoji">
            ⏬
          </span>
          !
        </p>
      </WorkHead>
      <>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            category={project.node.project_designation}
            title={project.node.project_title}
            description={project.node.project_preview_description}
            thumbnail={project.node.project_preview_thumbnail}
            uid={project.node._meta.uid}
            type={project.node.project_type}
            timeframe={project.node.project_timeframe}
          />
        ))}
      </>
      <WorkAfter>
        <WorkAction to={"/resume"}>
          <Button>See other things in the resume</Button>
        </WorkAction>
      </WorkAfter>
    </Layout>
  </>
)

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Work projects={projects} meta={meta} />
}

Work.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allProjects(sortBy: project_post_date_DESC) {
        edges {
          node {
            _linkType
            project_designation
            project_post_date
            project_preview_description
            project_preview_thumbnail
            project_timeframe
            project_title
            project_type
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
