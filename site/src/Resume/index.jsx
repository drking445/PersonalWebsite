import React from 'react';
import './resume.css';
import gmail from './gmail.png';
import github from './github.png';
import home from './home.png';
import phone from './phone.png';
/* eslint-disable */
class Resume extends React.Component{

    render(){
        return(

            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <body>
            <title>Resume</title>
            <h1>Resume</h1>

            <h2>Demetrius King Jr.</h2>
            <div className={"header"}>
                <ul>
                    <li> <img src={home} className={"home"}/> 225 Central Ave SW, Atlanta, GA 30303</li>
                    <li><img src={gmail} className={"gmail"}/> drking445@gmail.com </li>
                    <li><img src={github} className={"github"}/> github.com/drking445 </li>
                    <li> <img src={phone} className={"phone"}/>(404) 593-3893</li>
                </ul>
            </div>
                    <hr/>
                <p className="head"><b>Education</b></p>
                        <p>Morehouse College, Bachelors of Science, Computer Science, May 2018</p>
                        <p>University of Chicago, PhD Machine Learning</p>
                <p className="head"><b>Technical Skills</b></p>
                <div>
                        <ul className={"resume"}>
                            <li className={"tech"}>Beginner proficiency with React and Angular frameworks</li>
                            <li className={"tech"}>Intermediate proficiency with Swift, Java, Python, C++, and Ruby on Rails</li>
                            <li className={"tech"}>Intermediate proficiency using HTML and CSS</li>
                        </ul>
                </div>
                <div className={"intern"}>
                    <p><b>Internship Experience</b></p>
                        <ul className={"resume"}>
                            <li>Recycling Club</li>
                            <li>Gardening Club</li>
                            <li>Book Club</li>
                        </ul>
                </div>
            </body>
            </html>


        );
    }




}
export default Resume;