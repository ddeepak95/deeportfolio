import styled from "@emotion/styled"
import { css } from "@emotion/core"
import React from "react"
import colors from "../styles/colors"
import typefaces from "../styles/typefaces"
import { Fragment } from "react"
import ScrollAnimation from "react-animate-on-scroll"

const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  overflow-scroll: hidden;
  margin-bottom: 10px;
`

const Subtitle = styled("h4")`
  font-family: ${typefaces.sansSerif};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${colors.grey600};
`

const Tag = styled("div")`
  margin: 0px 10px 10px 0px;
  .label {
    padding: 5px 15px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: ${typefaces.sansSerif};
  }

  .tooltip {
    margin-top: -15px !important;
  }
`

const Skills = () => (
  <section id="tags-section">
    <ScrollAnimation
      duration={0.7}
      offset={20}
      delay={0}
      animateIn="animate__fadeIn"
      animateOnce={true}
    >
      <Subtitle>Design</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">UI/UX Design</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Needfinding</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Learning Design</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Graphic Design</span>
          </Tag>
        </Fragment>
      </TagsContainer>
      <Subtitle>Technical</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Web Development</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Low-code App Development</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Workflow Automation</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Video Editing</span>
          </Tag>
        </Fragment>
      </TagsContainer>
      <Subtitle>Leadership</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">Project Management</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">Facilitation</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">Collaboration</span>
          </Tag>
        </Fragment>
      </TagsContainer>
    </ScrollAnimation>
  </section>
)

export default Skills
