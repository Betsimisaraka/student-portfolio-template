import React from 'react'
import { Link } from 'react-router-dom'

function Filtering() {
    return (
        <div className="projects-container">
            <h2 className="project-heading">Projects</h2>
            <div className="projects-btns">
                <Link to="/react"><button className="react-btn">React</button></Link>
                <Link to="/sass"><button className="sass-btn">Sass</button></Link>
                <Link to="responsive"><button className="responsive-btn">Responsive</button></Link>
            </div>
        </div>
    )
}

export default Filtering
