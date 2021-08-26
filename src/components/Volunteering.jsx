import React from 'react'

const Volunteering = ({ volunteering }) => (
    <section>
        <h3>Volunteering</h3>
        {volunteering.map((experience, i) => (
            <div key={i}>
            <h4>{experience.title[0].text}</h4>
            <h5>{experience.orgName[0].text}</h5>
            <p>{experience.description[0].text}</p>
            </div>  
         ))
        }
    </section>
)

export default Volunteering;