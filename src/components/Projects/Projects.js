import React from 'react'
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
    return (
        <section className='project-section' id='projects'>
            <div className="project-header">
                <div className="projects-heading">Projects</div>
                <a className="projects-subtitle" href="https://github.com/DevoAbhi" target='__blank'>Click here to visit my Github</a>
            </div>
            <ProjectItem></ProjectItem>
        </section>
    )
}

export default Projects;