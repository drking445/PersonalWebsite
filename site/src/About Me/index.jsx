import React from 'react';
import './about.css';
/* eslint-disable */


class About extends React.Component{

    render(){
        return(

            <html>
            <title>About Me</title>

            <h1>About Me</h1>

            <body>
            <div className="container-fluid bg-1 text-center">
                <h3>Who Am I?</h3>
                <p>
                    I am a PhD student at the University of Chicago specializing in machine learning. I am interested in web and mobile development and I will host some of my projects on this website.
                </p>
            </div>

            <div className="container-fluid bg-2 text-center">
                <h3>LinkedIn</h3>
                <p>Please follow my LinkedIn account to get updated on my experiences and skills and join my network!</p>
            </div>

            <div className="container-fluid bg-3 text-center">
                <h3>Youtube</h3>
                <p>Please follow my Youtube channel to be updated on my videos where I plan to update my journey on software development and machine learning! </p>
            </div>
            </body>


            </html>


        );
    }




}
export default About;