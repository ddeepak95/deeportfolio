import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
// import dimensions from "styles/dimensions";
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

const TooltipContainer = styled("span")`
  .tooltip {
    font-weight: 300;
    max-width: 300px;
    text-align: center;
    border-radius: 4px;
    border-width: 2px;
    padding: 15px 10px;
    opacity: 1 !important;
    color: ${colors.grey900} !important;
    box-shadow: -2px 13px 44px -11px rgba(0, 0, 0, 0.29);
  }
  .tooltip.place-top:after {
    border-left: 6px solid transparent !important;
    border-right: 6px solid transparent !important;
    bottom: -6px !important;
    margin-left: -4px !important;
    border-bottom-width: 10px !important;
    transform: scale(4);
  }
`

const TooltipText = ({ tooltipId, children, ...props }) => (
  <TooltipContainer>
    <ReactTooltip
      html={true}
      id={tooltipId}
      effect="solid"
      globalEventOff="click"
      className="tooltip"
      backgroundColor="white"
      border
      borderColor={colors.grey200}
      {...props}
      overridePosition={({ left, top }, _e, _t, node) => {
        return {
          top,
          left: typeof node === "string" ? left : Math.max(left, 0),
        }
      }}
    ></ReactTooltip>
  </TooltipContainer>
)

TooltipText.propTypes = {
  tooltipId: PropTypes.string.isRequired,
}

export default TooltipText
