import React from 'react';
import About from './component/About';
import FrontEnd from './component/FrontEnd';
import Experiences from './component/Experiences';
import DisplayProject from './component/DisplayProject';

function App() {
    return (
        <div className="container">
            <About />
            <FrontEnd />
            <Experiences />
            <DisplayProject />
        </div>
    )
}

export default App
