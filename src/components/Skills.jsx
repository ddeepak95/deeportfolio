import styled from "@emotion/styled"
import { css } from "@emotion/core"
import React from "react"
import HeroText from "./_ui/HeroText"
import colors from "../styles/colors"
import typefaces from "../styles/typefaces"
import { Fragment } from "react"
import { RichText } from "prismic-reactjs"
import ScrollAnimation from "react-animate-on-scroll"

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
  margin: 0px 10px 10px 0px;
  .tooltip-label {
    padding: 5px 15px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: ${typefaces.sansSerif};
  }

  .tooltip {
    margin-top: -15px !important;
  }
`

var a = 200

const Skills = ({ skills }) => (
  <section id="skills-section">
    <h3>Skills</h3>
    <ScrollAnimation
      duration={0.7}
      offset={20}
      delay={0}
      animateIn="animate__fadeIn"
      animateOnce={true}
    >
      <SkillsContainer>
        {skills.map((skill, i) => (
          <Fragment key={i}>
            <Skill
              css={css`
                background-color: ${colors[skill.color + "200"]};
                color: ${colors[skill.color + "600"]};
              `}
            >
              <HeroText
                tooltipId="skills"
                tooltipText={RichText.asText(skill.description)}
              >
                <ScrollAnimation
                  offset={250}
                  initiallyVisible={true}
                  delay={(a += 20)}
                  animateIn="animate__pulse"
                >
                  {skill.name[0].text}
                </ScrollAnimation>
              </HeroText>
            </Skill>
          </Fragment>
        ))}
      </SkillsContainer>
    </ScrollAnimation>
  </section>
)

export default Skills
