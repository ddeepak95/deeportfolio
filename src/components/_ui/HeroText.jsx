import React, { Fragment } from 'react';
import { isMobile } from "react-device-detect";
import PropTypes from 'prop-types'
import TooltipText from './TooltipText';

const HeroText = ({ tooltipId, tooltipText, children, ...props }) => (

            <Fragment>
                <span className="tooltip-label" data-tip={tooltipText} data-html={true} data-for={tooltipId} data-event={isMobile ? 'click' : 'mouseover focus'} {...props}>
                    {children}
                </span>
                <TooltipText tooltipId={tooltipId}></TooltipText>
            </Fragment>


)

HeroText.propTypes = {
    tooltipId: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default HeroText;