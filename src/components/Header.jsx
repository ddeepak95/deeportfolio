import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";
import { slide as Menu } from 'react-burger-menu'


const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 3em;
    justify-content: flex-end;
    width: 100%;
    max-width: 300px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 2.5em;

    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        display: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.25em;
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
                background: ${colors.blue500};
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

const SideMenu =  styled.div`
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
      top: 50px;
      width: 32px;
      height: 28px;

        
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: ${colors.blue900};
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
      transform: scale(3) translate(-20px, 15px);
      right: 40px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }
    /* General sidebar styles */
    .bm-menu {
      background: white;
      padding: 3.5em 1.5em;
      font-size: 3em;
      font-weight: 600;
      width: 100%
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
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        display: block;
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/everything-else">
                    Everything else
                </Link>
            </HeaderLinks>

            <SideMenu>
              <Menu width={ '100%' } right>
                <Link className="menu-item" to="/" >
                  Home
                </Link>
                <Link
                    to="/work">
                    Work
                </Link>
                <Link
                    to="/everything-else">
                    Everything else
                </Link>
              </Menu>
            </SideMenu>


        </HeaderContent>

    </HeaderContainer>
)

export default Header;