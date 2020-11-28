import React from 'react';
import MyImage from '../assets/anita.webp';
import styled from "styled-components";

const AboutContainer = styled.div`
    background: #FFFFFF;
    border-radius: 12px;
    padding: 22px;
    & img {
        width: 100%;
        height: 100%;
        background: #C4C4C4;
        border-radius: 12px;
    }
`;

function About() {
    return (
        <AboutContainer className="personal-info-container" >
            <img src={MyImage} alt="" />
            <div className="personal-info">    
                <div>
                    <div className="name-job">
                        <h3 className="name">Anita Rasoa</h3>
                        <p className="job">Font-end Developer</p>
                    </div>
                    <div className="email-phone">
                        <p className="email">✉ anita.ras@onja.org</p>
                        <p className="phone-number">📞 (+261)34 52 910 94</p>
                    </div>
                </div>
                <div className="desc">
                    <p className="description">Self-motivated developer, who is willing to learn and create outstanding UI applications</p>
                </div>
            </div>
        </AboutContainer>
    )
}

export default About
