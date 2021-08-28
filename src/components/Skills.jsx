import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react'
import HeroText from './_ui/HeroText';
import colors from '../styles/colors';
import typefaces from '../styles/typefaces';
import { Fragment } from 'react';
import { RichText } from 'prismic-reactjs';
import ScrollAnimation from 'react-animate-on-scroll';

// const randomColorSelect = () => {
//     const colorsArray = ["blue", "green", "orange"];
//     var randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)];
//     return randomColor;
// };

const SkillsContainer = styled("div")`
    display: flex;
    flex-wrap: wrap;
    overflow-scroll: hidden;

`


const Skill = styled("div")`
padding:5px 15px;
margin: 0px 10px 10px 0px;
.tooltip-label{
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: ${typefaces.sansSerif};
}

.tooltip{
    margin-top: -15px !important;
}
`

var a = 1500;

const Skills = ({ skills }) => (
    <section id="skills-section">
        <h3>Skills</h3>
        <ScrollAnimation delay={200} animateIn='animate__fadeIn' animateOnce={true}>
        <SkillsContainer>
        {skills.map((skill, i) => (
            <Fragment key={i}>
                <ScrollAnimation offset={250} initiallyVisible='true' delay={a += 20}
  animateIn='animate__pulse'>
                    <Skill css={css`background-color: ${colors[skill.color+"200"]}; color: ${colors[skill.color+"600"]}`}><HeroText tooltipId="skills" tooltipText={RichText.asText(skill.description)} >{skill.name[0].text}</HeroText></Skill> 
                </ScrollAnimation>
            </Fragment>  
         ))
        }
        </SkillsContainer>
        </ScrollAnimation>
    </section>
)

export default Skills;
