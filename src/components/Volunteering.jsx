import React from 'react'

const Volunteering = ({ volunteering }) => (
    <section>
        <h3>Volunteering</h3>
        {volunteering.map((experience, i) => (
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
         ))
        }
    </section>
)

export default Volunteering;