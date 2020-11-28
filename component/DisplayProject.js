import React, { useContext } from 'react';
import { Context } from '../Context'

function DisplayProject() {
    const { projects} = useContext(Context);
    console.log(projects);


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
            <ul className="lists-container">    
                {myProjects}
            </ul>
        </div>
    )
}

export default DisplayProject
