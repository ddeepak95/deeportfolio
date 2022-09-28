import styled from "@emotion/styled"
import { css } from "@emotion/core"
import React from "react"
import colors from "../styles/colors"
import typefaces from "../styles/typefaces"
import { Fragment } from "react"

const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  overflow-scroll: hidden;
  margin-bottom: 10px;
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

const ColoredTags = ({ tags }) => (
  <section id="tags-section">
      <TagsContainer>
        {tags.map((tag, i) => (
          <Fragment key={i}>
            <Tag
              css={css`
                background-color: ${colors[tag.color + "200"]};
                color: ${colors[tag.color + "600"]};
              `}
            >
                  <span className="label">{tag.name[0].text}</span>
            </Tag>
          </Fragment>
        ))}
      </TagsContainer>
  </section>
)

export default ColoredTags
