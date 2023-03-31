import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import { slide as Menu } from "react-burger-menu"

const HeaderContainer = styled("div")`
  // padding-top: 3.75em;
  // padding-bottom: 3em;
  display: unset;
`
const HeaderSpacer = styled("div")`
  height: 35px;
  display: block;
`
const HeaderSpacerBottom = styled("div")`
  height: 35px;
  display: block;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }
`

const HeaderContent = styled("div")`
  position: sticky;
  top: 0;
  padding-top: 20px;
  padding-bottom: 15px;
  border-radius: 0px 0px 25px 25px;
  background: white;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding-left: 4em;
  padding-right: 4em;
  margin: 0 auto;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 25px;
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 3em;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    // padding-bottom: 1.25em;
    // padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue300};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const SideMenu = styled.div`
  position: absolute;
  top: 0px;
  right: 60px;
  display: none;
  /* Individual item */
  .bm-item {
    display: inline-block;
    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 40px;
    color: #000;
    transition: color 0.2s;
  }
  /* Change color on hover */
  .bm-item:hover {
    color: ${colors.blue500};
  }
  /* The rest copied directly from react-burger-menu docs */
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    display: block;
    top: 12px;
    padding: 20px;
    width: 40px;
    height: 36px;
    transform: scale(0.8);
  }
  #react-burger-menu-btn:after {
    content: "";
    position: absolute;
    left: -20px;
    top: -20px;
    width: 80px;
    height: 80px;
    background: #ffffff00;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${colors.blue900};
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
    transform: scale(3) translate(-16px, 15px);
    right: 40px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }
  /* General sidebar styles */
  .bm-menu-wrap {
    top: 0px;
  }

  .bm-menu {
    background: white;
    padding: 120px 50px 0px 0px;
    font-size: 2em;
    font-weight: 600;
    width: 100%;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  /* Wrapper for item list */
  .bm-item-list {
    color: black;
    text-align: right;
  }
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderSpacer />
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/">
          Home
        </Link>
        {/* <Link activeClassName="Link--is-active" to="/casestudy">
          Case Studies
        </Link> */}
        {/* <Link activeClassName="Link--is-active" to="/features">
          Media Features
        </Link> */}
        <Link activeClassName="Link--is-active" to="/resume">
          Resume
        </Link>
        <Link activeClassName="Link--is-active" to="/experiments">
          Experiments
        </Link>
      </HeaderLinks>

      <SideMenu>
        <Menu width={"100%"} right>
          <Link className="menu-item" to="/">
            Home
          </Link>
          {/* <Link to="/work">Work</Link> */}
          {/* <Link to="/casestudy">Case Studies</Link> */}
          {/* <Link to="/features">Media Features</Link> */}
          <Link to="/resume">Resume</Link>
          <Link to="/experiments">Experiments</Link>
        </Menu>
      </SideMenu>
    </HeaderContent>
    <HeaderSpacerBottom />
  </HeaderContainer>
)

export default Header
