import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Volunteering = ({ volunteering }) => (
    <section>
        <h3>Volunteering</h3>
        {volunteering.map((experience, i) => (
            <ScrollAnimation delay={200} animateIn='animate__fadeIn' animateOnce={true}>
            <div key={i}>
            {experience.link && (
            <a className="heading-link" target="_blank" rel="noreferrer" href={experience.link.url}><h4>{experience.title[0].text}<span>&#8594;</span></h4></a>
            )}
            {experience.link == null && (
            <h4>{experience.title[0].text}</h4>
            )}
            <h5>{experience.orgName[0].text}</h5>
            <p>{experience.description[0].text}</p>
            </div>
            </ScrollAnimation>  
         ))
        }
    </section>
)

export default Volunteering;