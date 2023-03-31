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

const Tools = () => (
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
            <span className="label">Photoshop</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Illustrator</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">XD</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Figma</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">Balsamiq</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.blue200};
              color: ${colors.blue600};
            `}
          >
            <span className="label">InDesign</span>
          </Tag>
        </Fragment>
      </TagsContainer>
      <Subtitle>Dev</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">HTML/CSS</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Javascript</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">Google Appscript</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">React.JS</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.purple200};
              color: ${colors.purple600};
            `}
          >
            <span className="label">WordPress</span>
          </Tag>
        </Fragment>
      </TagsContainer>
      <Subtitle>Low Code</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">Glide App</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">N8N</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.green200};
              color: ${colors.green600};
            `}
          >
            <span className="label">AppSheet</span>
          </Tag>
        </Fragment>
      </TagsContainer>
      <Subtitle>Others</Subtitle>
      <TagsContainer>
        <Fragment>
          <Tag
            css={css`
              background-color: ${colors.orange200};
              color: ${colors.orange600};
            `}
          >
            <span className="label">Google Sheet</span>
          </Tag>
          <Tag
            css={css`
              background-color: ${colors.orange200};
              color: ${colors.orange600};
            `}
          >
            <span className="label">Premiere Pro</span>
          </Tag>
        </Fragment>
      </TagsContainer>
    </ScrollAnimation>
  </section>
)

export default Tools
