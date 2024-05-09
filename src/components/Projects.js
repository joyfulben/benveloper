import React, { useState } from 'react';
  
function Projects () {
    
    
    const projects = {
        body: {
            fundTheStrike: <div>
                    <a className='link-title' href='https://strike.fund/'>
                        <span>F</span>
                        <span>u</span>
                        <span>n</span>
                        <span>d</span>
                        <span> </span>
                        <span>T</span>
                        <span>h</span>
                        <span>e</span>
                        <span> </span>
                        <span>S</span>
                        <span>t</span>
                        <span>r</span>
                        <span>i</span>
                        <span>k</span>
                        <span>e</span>
                    </a>
                    <ul>
                        <li>Create the ability for organizations and workplaces that are striking to easily fund their operations.</li>
                        <li>Built in React and utilizing stripe billing integration</li>
                        <li>User's are able register and login</li>
                    </ul>
                </div>,
                twoSkyStudio: <div>
                    <a className='link-title' href='https://twoskystudio.com'>
                        <span>T</span>
                        <span>w</span>
                        <span>o</span>
                        <span> </span>
                        <span>S</span>
                        <span>k</span>
                        <span>y</span>
                        <span> </span>
                        <span>S</span>
                        <span>t</span>
                        <span>u</span>
                        <span>d</span>
                        <span>i</span>
                        <span>o</span>
                    </a>
                    <ul>
                        <li>React</li>
                        <li>Stripe integration</li>
                    </ul>
                    </div>,
                pVOptimizer: <div>
                    <p className='link-title'>
                        <span>P</span>
                        <span>V</span>
                        <span></span>
                        <span>O</span>
                        <span>p</span>
                        <span>t</span>
                        <span>i</span>
                        <span>m</span>
                        <span>i</span>
                        <span>z</span>
                        <span>e</span>
                        <span>r</span>
                    </p>
                    <br />
                    <ul>
                        <li>React</li>
                        <li>Ruby</li>
                        <li>PostgreSQL</li>
                    </ul>
                    </div>
            }
        }
        
        const [title, setTitle] = useState('PV Optimizer');
        const [projectBody, setProjectBody] = useState(projects.body.pVOptimizer);

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
                            <div className='li-container'><div className={title === 'PV Optimizer'? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('pv optimizer')}><h3>PV Optimizer</h3></li></div>
                            <div className='li-container'><div className={title === 'Fund The Strike' ? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('fund the strike')}><h3>Fund The Strike</h3></li></div>
                            <div className='li-container'><div className={title === 'Two Sky Studio'? 'active': 'selector-indicator'}></div><li onClick={()=>updateBody('two sky studio')}><h3>Two Sky Studio</h3></li></div>
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