import React from 'react';
import About from './component/About';
import FrontEnd from './component/FrontEnd';
import DisplayProject from './component/DisplayProject';
import Filtering from './component/Filtering';

function App() {
    return (
        <div className="container">
            <div className="about">    
                <About />
                <FrontEnd />
            </div>
            <div className="container_section">    
                <Filtering /> 
                <DisplayProject />
            </div>
        </div>
    )
}

export default App
