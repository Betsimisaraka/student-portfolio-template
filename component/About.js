import React from 'react';
import MyImage from '../assets/anita.webp';

function About() {
    return (
        <div className="personal-info-container" >
            <img src={MyImage} alt="" />
            <div className="personal-info">    
                <div className="personal-info-name">
                    <div className="name-job">
                        <h3 className="name">Anita Rasoa</h3>
                        <p className="job">Front-end Developer</p>
                    </div>
                    <div className="email-phone">
                        <p className="email"> anita.ras@onja.org</p>
                        <p className="phone-number"> (+261)34 52 910 94</p>
                    </div>
                </div>
                <div className="desc">
                    <p className="description">Self-motivated developer, who is willing to learn and create outstanding UI applications</p>
                </div>
            </div>
        </div>
    )
}

export default About
