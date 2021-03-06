import React from 'react';
import './about.css';
import linkedin from './images/linkedin.png';
import youtube from './images/youtube.png';
import medium from './images/medium.jpeg';
/* eslint-disable */


class About extends React.Component{

    render(){
        return(

            <html>
            <body>

            <title>About Me</title>

            <h1>About Me</h1>

            <div className="container-fluid bg-1 text-center">
                <h3>Who Am I?</h3>
                <p>
                    I am a PhD student at the University of Chicago specializing in machine learning. I am interested in web and mobile development and I will host some of my projects on this website.
                </p>
            </div>

            <div className="container-fluid bg-2 text-center">
                <h3>LinkedIn</h3>
                <div><a target="_blank" href={"https://www.linkedin.com/in/kingdemetrius/"}><img src={linkedin} className={"linkedin"} alt={"LinkedIn"}/></a></div>
                <p>Please follow my LinkedIn account to get updated on my experiences and skills and join my network!</p>
            </div>

            <div className="container-fluid bg-3 text-center">
                <h3>Youtube</h3>
                <a target="_blank" href={"https://www.youtube.com/channel/UCShc-i-gxRyzu6kmKOVgCJA?view_as=subscriber"}><img src={youtube} alt="Youtube" className={"youtube"} alt={"Youtube"}/></a>
                <p>Please follow my Youtube channel to be updated on my videos where I plan to update my journey on software development and machine learning! </p>
            </div>

            <div className="container-fluid bg-5 text-center">
                <h3>Medium</h3>
                <a target="_blank" href={"https://medium.com/@drking445"}><img src={medium} className={"medium"} alt={"Medium"}/></a>
                <p>Please follow my Medium page where I will write about my journey through software development and personal achievements! </p>
            </div>
            </body>
            </html>
        );
    }




}
export default About;