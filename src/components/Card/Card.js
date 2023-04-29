import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <a className='project-link' href={props.website} target='__blank'>
            <div className="card project-card">
                <div className="project-title">{props.title}</div>
                <div className="project-desc">{props.desc}</div>
            </div>
        </a>
    )
}

export default Card;