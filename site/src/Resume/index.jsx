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
            <title>Resume</title>
            <h1>Resume</h1>
            <div id="header"></div>
            <div className="left"></div>
            <div className="stuff">
                    <h2>Demetrius King Jr.</h2>
                <ul>
                    <li> <img src={home} className={"home"}/> 225 Central Ave SW, Atlanta, GA 30303</li>
                    <li><img src={gmail} className={"gmail"}/> drking445@gmail.com </li>
                    <li><img src={github} className={"github"}/> github.com/drking445 </li>
                    <li> <img src={phone} className={"phone"}/>(404) 593-3893</li>
                </ul>
                    <hr/>

                        <p className="head">Skills</p>
                        <ul>
                            <li>Web Design with HTML & CSS</li>
                        </ul>
                        <p className="head">Education</p>
                        <ul>
                            <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
                                <li>Wilton High School</li>
                            </a>
                            <a href="https://www.silvermineart.org/">
                                <li>Silvermine School of Arts</li>
                            </a>
                            <li>Codeacademy</li>
                        </ul>
                        <p className="head">Experience</p>
                        <ul>
                            <li>Student Technology Intern for Wilton School District</li>
                            <li>Babysitter</li>
                        </ul>
                        <p className="head">Extracurriculars</p>
                        <ul>
                            <li>Recycling Club</li>
                            <li>Gardening Club</li>
                            <li>Book Club</li>
                        </ul>
            </div>
            <div className="right"></div>
            <div id="footer">
                <h2 id="name">Emily</h2></div>
            </html>


        );
    }




}
export default Resume;