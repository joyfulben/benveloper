import React, { useState } from 'react';
  
function Projects () {
    
    
        const [title, setTitle] = useState('');
        const [projectBody, setProjectBody] = useState('');
        
        const projects = {
            body: {
                fundTheStrike: <div>This site helps organizations that are striking to easily fund their operations.<br /><ul><li>React</li><li>Stripe billing integration</li><li>User registration/login</li></ul></div>,
                twoSkyStudio: <div>This site displays an artist's work and implements stripe integration to pay for pieces.<br /><ul><li>React</li><li>Stripe integration</li></ul></div>,
                pVOptimizer: <div>This site takes a location and other inputs to give a accurate output of solar electricity using an NREL API.<br /><ul><li>React</li><li>Ruby</li><li>PostgreSQL</li><li>User registration/login</li></ul></div>
            }
        }

        function updateBody (name) {
            switch (name) {
                case 'pv optimizer':
                    setTitle('PV Optimizer');
                    setProjectBody(projects.body.pVOptimizer);
                    break;
                case 'fund the strike':
                    setTitle('Fund The Strike');
                    setProjectBody(projects.body.fundTheStrike);
                    break;
                case 'two sky studio':
                    setTitle('Two Sky Studio');
                    setProjectBody(projects.body.twoSkyStudio);
                    break;
            
                default:
                    break;
            }
        }
        return (

            <div id='projects'>
                <div className='section-header'>
                    <div className='header-accent'></div>                
                    <h1>Projects</h1>
                    <div className='header-accent'></div>                
                </div>
                <div className='section-details-container'>
                    <div className="project-details-selector">
                        <ul>
                            <div className='li-container'><div className={title == 'PV Optimizer'? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('pv optimizer')}><h3>PV Optimizer</h3></li></div>
                            <div className='li-container'><div className={title == 'Fund The Strike' ? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('fund the strike')}><h3>Fund The Strike</h3></li></div>
                            <div className='li-container'><div className={title == 'Two Sky Studio'? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('two sky studio')}><h3>Two Sky Studio</h3></li></div>
                        </ul>
                    </div>
                    <div className="project-details-container">
                        <div className="project-details">
                            {projectBody}
                        </div>
                    </div>
                </div>
            </div>
            )
}
export default Projects;