import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import Icon from "../images/icon.png"
import GIF from "../images/icon.gif"
import typefaces from "../styles/typefaces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import {
  faBehanceSquare,
  faInstagramSquare,
  faFacebookSquare,
  faMedium,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
library.add(
  faEnvelopeSquare,
  faBehanceSquare,
  faInstagramSquare,
  faFacebookSquare,
  faMedium,
  faLinkedin,
  faGithubSquare
)

const FooterContainer = styled("div")`
  font-family: ${typefaces.sansSerif};
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterIcons = styled("div")`
  text-align: center;
  a {
    font-size: 3em;
    margin: 0px 10px;
    color: ${colors.grey500};
    // vertical-align: baseline;
  }
  a:hover {
    color: ${colors.blue500};
  }
`

const FooterText = styled("div")`
  max-width: 500px;
  font-size: 0.9em;
  color: ${colors.grey700};
  text-align: center;
  display: flex;
  cursor: default;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 0.5em;

  &:hover {
    .FooterSpooch {
      transform: scale(1.4);
    }
  }

  p {
    margin: 0px;
    font-weight: 500;
  }
  strong {
    font-weight: 400;
  }
  .name {
    display: inline-block;
  }
`

const FooterSpooch = styled("img")`
  max-width: 48px;
  margin-top: 0.25em;
`

const Footer = () => {
  const [footerIcon, setFooterIcon] = useState(Icon)
  function defaultFooterIcon() {
    setFooterIcon(Icon)
  }
  function hoverFooterIcon() {
    setFooterIcon(GIF)
  }
  return (
    <FooterContainer>
      <Link to="/">
        <Logo />
      </Link>
      <FooterIcons>
        <a
          href="mailto:deepakvd@stanford.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon aria-label="email" icon="envelope-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/ddeepak95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon aria-label="linkedin" icon={["fab", "linkedin"]} />
        </a>
        <a
          href="https://medium.com/@ddeepak95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon aria-label="medium" icon={["fab", "medium"]} />
        </a>
        <a
          href="https://www.behance.net/ddeepak95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            aria-label="behance"
            icon={["fab", "behance-square"]}
          />
        </a>
        <a
          href="https://www.github.com/ddeepak95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            aria-label="github"
            icon={["fab", "github-square"]}
          />
        </a>
      </FooterIcons>
      <FooterText onMouseOver={hoverFooterIcon} onMouseOut={defaultFooterIcon}>
        <p>
          Thank you for making the time to drop by. I really appreciate it{" "}
          <span role="img" aria-label="heart-emoji">
            ❤️
          </span>
          <br />
          <br />© 2022 — Designed & Coded by{" "}
          <span className="name">Deepak Varuvel Dennison</span>{" "}
        </p>
        <FooterSpooch className="FooterSpooch" src={footerIcon} />
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
