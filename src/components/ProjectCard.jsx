import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import ScrollAnimation from "react-animate-on-scroll"

const ProjectCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 5fr 3.5fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;

  @media (max-width: 950px) {
    grid-template-columns: 5fr 3.5fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-in-out;

    .ProjectCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .ProjectCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const ProjectCardContent = styled("div")`
  background: white;
  padding: 2.25em 3em 2.25em 3em;
  position: relative;
  strong {
    font-weight: 400;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: 950px) {
    padding: 2.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("p")`
  font-weight: 600;
  // letter-spacing: 0.5px;
  color: ${colors.grey700};
  margin: 0px 0px -2px 0px;
`
// const ProjectCardType = styled("p")`
//   margin: 0px 0px 4px 0px;
//   display: inline-block;
//   padding: 1px 10px;
//   border-radius: 4px;
//   font-size: 0.8em;
//   font-weight: 600;
//   color: ${colors.blue400};
//   background-color: ${colors.blue200};
// `

const ProjectCardTitle = styled("h3")`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 3em;
  font-size: 0.9em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2em;
  }
`

const ProjectCardAction = styled("div")`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const ProjectCardImageContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;
  position: relative;
  left: 1px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 2em;
    max-height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    left: 0px;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    max-width: 175px;
    width: 100%;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 200px;
    }
  }
`

const ProjectCard = ({
  category,
  title,
  description,
  thumbnail,
  type,
  timeframe,
  uid,
}) => (
  <ScrollAnimation
    duration={0.7}
    offset={20}
    delay={0}
    animateIn="animate__fadeIn"
    animateOnce={true}
  >
    <ProjectCardContainer to={`/work/${uid}`}>
      <ProjectCardContent className="ProjectCardContent">
        {/* <ProjectCardType>{type[0].text}</ProjectCardType> */}
        <ProjectCardCategory>{category[0].text}</ProjectCardCategory>
        <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
        <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb>
        <ProjectCardAction className="ProjectCardAction">
          Details <span>&#8594;</span>
        </ProjectCardAction>
      </ProjectCardContent>
      <ProjectCardImageContainer className="ProjectCardImageContainer">
        <img src={thumbnail.url} alt={title[0].text} />
      </ProjectCardImageContainer>
    </ProjectCardContainer>
  </ScrollAnimation>
)

export default ProjectCard

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  timeframe: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
