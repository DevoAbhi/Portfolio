import React from 'react'
import "./Experience.css"
import { experiences } from '../../helper/myExperiences'

const Experience = () => {
    return (
        <section className='experience-section' id="experience">
            <div className="experience-heading">Experience</div>

            <div className="experience-container">
                {experiences.map((experience) => (
                    <div className="card experience-card">
                        <div className="company-name">{experience.company_name}</div>
                        <div className="position">{experience.position}</div>
                        <div className="time">{experience.start_date}-{experience.end_date}</div>
                        <div className="work">
                            <ul>
                                {experience.responsibilities.map((responsibility) => (
                                    <li>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

            </div>



        </section>
    )
}

export default Experience;