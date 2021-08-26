import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import typefaces from '../styles/typefaces';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faBehanceSquare, faInstagramSquare, faFacebookSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelopeSquare, faBehanceSquare, faInstagramSquare, faFacebookSquare, faMedium, faLinkedin)

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
a{
    font-size: 3em;
    margin:0px 10px;
    color: ${colors.grey500};
    // vertical-align: baseline;
}
a:hover{
    color: ${colors.blue500};
}
`

const FooterAuthor = styled("a")`
    font-size: 0.9em;
    color: ${colors.grey500};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 0.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const FooterSpooch = styled("img")`
    max-width: 33px;
    margin-top: 0.25em;
`

const Footer = () => (
    <FooterContainer>
        <Link to="/">
            <Logo />
        </Link>
        <FooterIcons>
           <a href="mailto:ddeepak95@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="email" icon="envelope-square" /></a>
           <a href="https://www.linkedin.com/in/ddeepak95/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="linkedin" icon={['fab', 'linkedin']} /></a>
           <a href="https://medium.com/@ddeepak95" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="medium" icon={['fab', 'medium']} /></a>
           <a href="https://www.behance.net/ddeepak95" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="behance" icon={['fab', 'behance-square']} /></a>
           <a href="https://www.instagram.com/ddeepak95/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="instagram" icon={['fab', 'instagram-square']} /></a>
        </FooterIcons>
        <FooterAuthor href="#">
            © 2021 — Deepak Varuvel Dennison
            {/* <FooterSpooch className="FooterSpooch" src={spooch} /> */}
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
