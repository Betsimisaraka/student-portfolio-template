import React, { useState, useEffect } from 'react';
import ProjectData from './component/Project';

const Context = React.createContext();

function ContextProvider({children}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(ProjectData);
    }, [])

    return (
        <div>
            <Context.Provider value={{ projects }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }
