import React from 'react'

function FrontEnd() {
    return (
        <div className="front-end">
            <h2 className="front-end-heading">Front End</h2>
            <div className="front-end-container">   
                <div>    
                    <fieldset>    
                        <label>Html</label>
                        <progress id="file" value="90" max="100"> 80% </progress>
                    </fieldset>
                    <fieldset>    
                        <label>Css/Sass</label>
                        <progress id="file" value="90" max="100"> 60% </progress>
                    </fieldset>
                </div>
                <div>    
                    <fieldset>    
                        <label>Javascript</label>
                        <progress id="file" value="75" max="100"> 60% </progress>
                    </fieldset>
                    <fieldset>    
                        <label>React</label>
                        <progress id="file" value="50" max="100"> 50% </progress>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default FrontEnd