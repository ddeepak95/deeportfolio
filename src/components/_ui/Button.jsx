import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 1.25em 2.2em;
  background: ${colors.blue400};
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 2px;
  position: relative;
  transition: background 100ms ease-in-out;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1.4em 2.5em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${colors.pink400} 0%,
      ${colors.purple400} 100%
    );
    z-index: -1;
  }

  &:hover {
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
  }

  &.Button--secondary {
    background: ${colors.blue200};
    color: ${colors.blue600};
    padding: 1.25em 2.2em;
    font-size: 0.98rem;

    &:hover {
      background: ${colors.blue300};
      transition: background 100ms ease-in-out;
    }
  }
`

class Button extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        {this.props.children}
      </ButtonContainer>
    )
  }
}

export default Button
