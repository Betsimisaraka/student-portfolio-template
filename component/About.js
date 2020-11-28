import React from 'react';
import MyImage from '../assets/my-image.jpg';

function About() {
    return (
        <div>
            <h2>About me</h2>
            <img src={MyImage} alt="" />
            <div>
                <div>
                    <h3>Anita Rasoa</h3>
                    <p>Font-end-developer</p>
                </div>
            </div>
        </div>
    )
}

export default About
