import React from 'react';
import About from './component/About';
import FrontEnd from './component/FrontEnd';
import Experiences from './component/Experiences';
import Filtering from './component/Filtering';
import { Route, Switch } from 'react-router-dom';
import ReactProject from './component/ReactProject';
import SassProject from './component/SassProjects';
import ResponsiveProject from './component/ResponsiveProject';

function App() {
    return (
        <div className="container">
            <About />
            <FrontEnd />
            {/* <Experiences /> */}
            <Filtering />
            <Switch>
                <Route path="/react">
                    <ReactProject />
                </Route>
                <Route path="/sass">
                    <SassProject />
                </Route>
                <Route path="/responsive">
                    <ResponsiveProject />
                </Route>
            </Switch>
        </div>
    )
}

export default App
