import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"
// import ScrollAnimation from "react-animate-on-scroll"
import ShowMoreText from "react-show-more-text";
import typefaces from "../styles/typefaces"

const WeblinkCardContainer = styled(Link)`
  display: block;
  // min-width: 250px;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.05);
  // margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: currentColor;
  border: solid 1px ${colors.grey400};
  border-radius: 10px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 0px;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
    transition: all 150ms ease-in-out;

    .WeblinkCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    // .WeblinkCardContent::before {
    //   opacity: 0.02;
    //   transition: all 150ms ease-in-out;
    // }

    // .WeblinkCardImageContainer::before {
    //   opacity: 0.2;
    //   transition: all 150ms ease-in-out;
    // }
  }
`

const WeblinkCardContent = styled("div")`
  // padding: 2.25em 3em 2.25em 3em;
  position: relative;
  strong {
    font-weight: 400;
  }
  // &:before {
  //   position: absolute;
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   left: 0;
  //   top: 0;
  //   background: ${colors.blue500};
  //   mix-blend-mode: multiply;
  //   opacity: 0;
  //   transition: all 150ms ease-in-out;
  // }

  @media (max-width: 950px) {
    // padding: 2.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    // grid-row: 2;
  }
`

const WeblinkTextContent = styled("div")`
margin: 20px;

  .weblinkTitle{
    font-weight: 600;
    // height: 50px;
    margin-top: 18px;
    margin-bottom: 0.5em;
    font-size: 0.9em;
  }

  .weblinkSiteName{
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey700};
    margin-bottom: 20px;
  }

  .weblinkDescription{
    font-family: ${typefaces.sansSerif};
    line-height: 22px;
    font-weight: 300;
    font-size: 1.0em;
  }
`


const WeblinkCardCategory = styled("p")`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.teal600};
  margin: 10px;
  float: right;
  background-color: #ffffffe0;
  width: fit-content;
  padding: 0px 15px;
  border-radius: 20px;
`

const WeblinkCardTitle = styled("h4")`

  margin-top: 0.2em;
`

const WeblinkCardBlurb = styled("div")`
  margin-top: 0.5em;
  margin-bottom: 1em;
  font-size: 0.9em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2em;
  }
`
const WeblinkCardWebsites = styled("h5")`
`


const WeblinkCardImageContainer = styled("div")`
  height: 150px;
  background: ${(props) => `url(${props.imgUrl})`};
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  bottom: 1px;
  border-radius: 10px 10px 0px 0px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    max-height: 300px;
  }

  // &:before {
  //   position: absolute;
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   left: 0;
  //   top: 0;
  //   mix-blend-mode: multiply;
  //   opacity: 0;
  //   transition: all 150ms ease-in-out;
  // }
`

const WeblinkCard = ({
  category,
  title,
  description,
  thumbnail,
  websiteName,
  websiteLink,
  link,
}) => (
  // <ScrollAnimation
  //   duration={0.7}
  //   offset={400}
  //   delay={0}
  //   animateIn="animate__fadeIn"
  //   animateOnce={true}
  // >
    <WeblinkCardContainer to={link.url} target="_blank" rel="noopener noreferrer">
      <WeblinkCardContent className="WeblinkCardContent">
        <WeblinkCardImageContainer imgUrl = {thumbnail.url} className="WeblinkCardImageContainer">
          <WeblinkCardCategory>{category}</WeblinkCardCategory>
        </WeblinkCardImageContainer>      
        <WeblinkTextContent>
          <ShowMoreText
            className = "weblinkTitle"
            lines={2}
            more=""
            less=""
          >
            <WeblinkCardTitle>{title}</WeblinkCardTitle>
          </ShowMoreText>
          <WeblinkCardBlurb>
            <ShowMoreText
              className = "weblinkDescription"
              lines={3}
              more=""
              expandByClick = {false}
                        >
                {RichText.render(description)}
              </ShowMoreText>
              </WeblinkCardBlurb>
              <ShowMoreText
              lines={1}
              more=""
              expandByClick = {false}
              className = "weblinkSiteName"
                        >
            <WeblinkCardWebsites>{websiteName[0].text} • {websiteLink[0].text}</WeblinkCardWebsites>
          </ShowMoreText>       
        </WeblinkTextContent>
      </WeblinkCardContent>

    </WeblinkCardContainer>

)

export default WeblinkCard

WeblinkCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  websiteName: PropTypes.array.isRequired,
  websiteLink: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  timeframe: PropTypes.array.isRequired,
  link: PropTypes.array.isRequired,
}
