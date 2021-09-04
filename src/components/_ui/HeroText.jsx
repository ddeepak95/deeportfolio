import React from "react"
import PropTypes from "prop-types"
import TooltipText from "./TooltipText"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const TooltipContainer = styled("span")`
  cursor: help;
  .desktop {
    display: inline-block;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      display: none;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: none;
    }
  }

  .mobile {
    display: none;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      display: inline-block;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      display: inline-block;
    }
  }
`

function HeroText({ tooltipId, tooltipText, children, ...props }) {
  return (
    <TooltipContainer>
      <span
        className="tooltip-label desktop"
        data-tip={tooltipText}
        data-html={true}
        data-for={tooltipId}
        data-event={"mouseenter"}
        data-event-off={"mouseleave"}
        {...props}
      >
        {children}
      </span>
      <span
        className="tooltip-label mobile"
        data-tip={tooltipText}
        data-html={true}
        data-for={tooltipId}
        data-event={"click"}
        {...props}
      >
        {children}
      </span>
      <TooltipText tooltipId={tooltipId}></TooltipText>
    </TooltipContainer>
  )
}

// const HeroText = ({ tooltipId, tooltipText, children, ...props }) => (
//             <Fragment>
//                 <span className="tooltip-label" data-tip={tooltipText} data-html={true} data-for={tooltipId} data-event={isMobile ? 'click' : 'mouseover focus'} {...props}>
//                     {children}
//                 </span>
//                 <TooltipText tooltipId={tooltipId}></TooltipText>
//             </Fragment>
// )

HeroText.propTypes = {
  tooltipId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default HeroText
