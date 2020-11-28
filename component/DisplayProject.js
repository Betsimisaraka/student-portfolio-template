import React, { useEffect, useState } from 'react';
import ProjectData from '../component/Project';

function DisplayProject() {
    const [projects, setProjects] = useState([]);
    console.log(projects);

    useEffect(() => {
        setProjects(ProjectData);
    }, [])

    const myProjects = projects.map((project, index) => (
        <li className="lists-item" key={index}>
            <img src={project.photo} alt="" />
            <p className="made-by">#HTML #CSS/SCSS #Responsive</p>
            <h3 className="title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="buttons">
                <button className="demo"><a className="demo-link" href={project.demo}> Demo</a></button>
                <button className="code"><a className="code-link" href={project.code}> Code</a></button>
            </div>
        </li>
    ))

    return (
        <div>
            <h2>My project</h2>
            <ul className="lists-container">    
                {myProjects}
            </ul>
        </div>
    )
}

export default DisplayProject
