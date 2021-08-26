import React from 'react'


const Education = ({ courses }) => (
    <section>
        <h3>Education</h3>
        {courses.map((edu, i) => (
            <div key={i}>
            <h4>{edu.courseName[0].text}</h4>
            <h5>{edu.institutionName[0].text}<span className="float-right"> {edu.period[0].text}</span></h5>
            </div>  
         ))
        }
    </section>
)

export default Education;