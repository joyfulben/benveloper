import React, { useState } from 'react';
  
function About () {
    
    
        const [title, setTitle] = useState('');
        const [aboutBody, setAboutBody] = useState('');
        // HTML, CSS, Javascript, jQuery, Ruby on Rails, NodeJS, ReactJS, Git and Github
        const about = {
            body: {
                education: <div>A twelve-week, 12 hours per day intensive program that exposes students to the latest programming languages and trends used in the tech industry.<ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>JQuery</li><li>Ruby</li><li>Node</li></ul></div>,
                professionalHistory: <div><p>While I have experience in carpentry and landscaping, I now focus my energy on web and software development</p></div>,
                hobbies: <div><ul><li>Hiking</li><li>Cooking</li><li>Preserving food</li><li>Playing with my cats</li><li>Chopping firewood</li></ul></div>
            }
        }

        function updateTitle (name) {
            switch (name) {
                case 'education':
                    setTitle('education');
                    setAboutBody(about.body.education);
                    break;
                case 'professional history':
                    setTitle('professional history');
                    setAboutBody(about.body.professionalHistory);
                    break;
                case 'hobbies':
                    setTitle('hobbies');
                    setAboutBody(about.body.hobbies);
                    break;
            
                default:
                    break;
            }
        }
        return (

            <div id='about'>
                <div className='section-header'>
                    <div className='header-accent'></div>                
                    <h1>About</h1>
                    <div className='header-accent'></div>                
                </div>
                <div className='section-details-container'>
                    <div className="about-details-selector">
                        <ul>
                            <li onClick={()=>updateTitle('education')}><h3>Education</h3></li>
                            <li onClick={()=>updateTitle('professional history')}><h3>Professional History</h3></li>
                            <li onClick={()=>updateTitle('hobbies')}><h3>Hobbies</h3></li>
                        </ul>
                    </div>
                    <div className="about-details-container">
                        <h2>{title}</h2>
                        <div className="about-details">
                            {aboutBody}
                        </div>
                    </div>
                </div>
            </div>
            )
}
export default About;