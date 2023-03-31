import React from "react"
import styled from "@emotion/styled"
import ScrollAnimation from "react-animate-on-scroll"
import { Link } from "gatsby"
import colors from "styles/colors"
import typefaces from "styles/typefaces"
import dimensions from "styles/dimensions"
import Button from "../components/_ui/Button"
import ShowMoreText from "react-show-more-text"

const CasestudyNavigation = styled("section")`
  margin-top: 40px;
  .centered {
    padding: 0% 18%;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      padding-left: ${dimensions.paddingHorizontalTablet}em;
      padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding-left: ${dimensions.paddingHorizontalMobile}em;
      padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
  }

  h3 {
    text-align: center;
    font-family: ${typefaces.sansSerif};
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-bottom: 20px;
  }
`

const NavigationContainer = styled(Link)`
  display: block;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.15);
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: ${colors.grey900};
  padding-bottom: 10px;
  @media (max-width: 950px) {
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    height: auto;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    height: auto;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-in-out;

    .NavigationCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .NavigationCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .NavigationCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const NavigationCardAction = styled("div")`
  font-weight: 400;
  font-size: 0.8em;
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

const NavigationCardImageContainer = styled("div")`
  img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`

const NavigationCardContent = styled("div")`
  //   background: white;
  display: block;
  vertical-align: top;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1.2em;

  @media (max-width: 950px) {
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    width: 100%;
    display: block;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
    width: 100%;
  }
`

const CasestudyNavigationContainer = styled("div")`
  .grid-container {
    /**
     * User input values.
     */
    --grid-layout-gap: 25px;
    --grid-column-count: 3;
    --grid-item--min-width: 100px;

    @media (max-width: 950px) {
      --grid-column-count: 3;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      --grid-column-count: 1;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      --grid-column-count: 1;
    }

    /**
     * Calculated values.
     */
    --gap-count: calc(var(--grid-column-count) - 1);
    --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
    --grid-item--max-width: calc(
      (100% - var(--total-gap-width)) / var(--grid-column-count)
    );

    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
    );
    grid-gap: var(--grid-layout-gap);
    margin-bottom: 100px;
    margin-top: 20px;
    color: ${colors.purple700};
  }
  .grid-container .box-1,
  .grid-container .box-2,
  .grid-container .box-3 {
    // border: 2px solid ${colors.orange600};
    border-radius: 10px;
    // padding: 20px 20px;
  }
`
const WorkAction = styled(Link)`
  display: block;
  text-align: center;
  margin: 10px 0px;
`

const CasestudyNavigationBlock = ({ navigations }) => (
  <CasestudyNavigation>
    <div className="centered">
      <h3>More Casestudies</h3>
      <div>
        <ScrollAnimation
          duration={0.7}
          offset={20}
          delay={0}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <CasestudyNavigationContainer>
            <div className="grid-container">
              <NavigationContainer
                className="box-1"
                to={navigations.firstNavigationLink}
              >
                <NavigationCardImageContainer className="NavigationCardImageContainer">
                  <img
                    src={require("../images/projects/" +
                      navigations.firstNavigationImg)}
                    alt={navigations.firstNavigationTitle}
                  />
                </NavigationCardImageContainer>
                <NavigationCardContent className="NavigationCardContent">
                  <ShowMoreText lines={1} more="" less="">
                    {navigations.firstNavigationTitle}
                  </ShowMoreText>
                  <NavigationCardAction className="NavigationCardAction">
                    View Case Study <span>&#8594;</span>
                  </NavigationCardAction>
                </NavigationCardContent>
              </NavigationContainer>
              <NavigationContainer
                className="box-2"
                to={navigations.secondNavigationLink}
              >
                <NavigationCardImageContainer className="NavigationCardImageContainer">
                  <img
                    src={require("../images/projects/" +
                      navigations.secondNavigationImg)}
                    alt={navigations.secondNavigationTitle}
                  />
                </NavigationCardImageContainer>
                <NavigationCardContent className="NavigationCardContent">
                  <ShowMoreText lines={1} more="" less="">
                    {navigations.secondNavigationTitle}
                  </ShowMoreText>
                  <NavigationCardAction className="NavigationCardAction">
                    View Case Study <span>&#8594;</span>
                  </NavigationCardAction>
                </NavigationCardContent>
              </NavigationContainer>
              <NavigationContainer
                className="box-3"
                to={navigations.thirdNavigationLink}
              >
                <NavigationCardImageContainer className="NavigationCardImageContainer">
                  <img
                    src={require("../images/projects/" +
                      navigations.thirdNavigationImg)}
                    alt={navigations.thirdNavigationTitle}
                  />
                </NavigationCardImageContainer>
                <NavigationCardContent className="NavigationCardContent">
                  <ShowMoreText lines={1} more="" less="">
                    {navigations.thirdNavigationTitle}
                  </ShowMoreText>
                  <NavigationCardAction className="NavigationCardAction">
                    View Case Study <span>&#8594;</span>
                  </NavigationCardAction>
                </NavigationCardContent>
              </NavigationContainer>
            </div>
          </CasestudyNavigationContainer>
          <h3>Check out my resume for other engagements!</h3>
          <WorkAction to={"/resume"}>
            <Button>View Resume</Button>
          </WorkAction>
        </ScrollAnimation>
      </div>
    </div>
  </CasestudyNavigation>
)

export default CasestudyNavigationBlock
