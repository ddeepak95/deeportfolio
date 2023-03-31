import React from "react"
import { Link } from "gatsby"
// import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
import ScrollAnimation from "react-animate-on-scroll"

const CasestudyCardContainer = styled(Link)`
  display: grid;
  grid-template-columns: 5fr 4.5fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  height: 350px;
//   background: ${colors.blue100};
  @media (max-width: 950px) {
    grid-template-columns: 5fr 4.5fr;
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

    .CasestudyCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .CasestudyCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .CasestudyCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const CasestudyCardContent = styled("div")`
//   background: white;
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
    // background: ${colors.blue500};
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

const CasestudyCardTitle = styled("h3")`
  margin-bottom: 1.2em;
  margin-top: 0.2em;
`

const CasestudyCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 3em;
  font-size: 0.9em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2em;
  }
`

const CasestudyCardAction = styled("div")`
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

const CasestudyCardImageContainer = styled("div")`
//   background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  position: relative;
//   padding-left: 2em;
//   padding-right: 2em;
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
    // background: ${colors.blue500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    // max-width: 175px;
    width: 100%;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 200px;
    }
  }
`

const CasestudyCard = ({ title, description, thumbnail, uid }) => (
  <ScrollAnimation
    duration={0.7}
    offset={20}
    delay={0}
    animateIn="animate__fadeIn"
    animateOnce={true}
  >
    <CasestudyCardContainer to={`/casestudy/${uid}`}>
      <CasestudyCardContent className="CasestudyCardContent">
        <CasestudyCardTitle>{title}</CasestudyCardTitle>
        <CasestudyCardBlurb>{description}</CasestudyCardBlurb>
        <CasestudyCardAction className="CasestudyCardAction">
          View Case Study <span>&#8594;</span>
        </CasestudyCardAction>
      </CasestudyCardContent>
      <CasestudyCardImageContainer className="CasestudyCardImageContainer">
        <img src={require("../images/projects/gcc/" + thumbnail)} alt={title} />
      </CasestudyCardImageContainer>
    </CasestudyCardContainer>
  </ScrollAnimation>
)

export default CasestudyCard

CasestudyCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  timeframe: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
