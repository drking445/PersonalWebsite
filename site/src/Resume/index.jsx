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
                <h3 className="head"><b>Education</b></h3>
                        <p>Morehouse College, Bachelors of Science, Computer Science, May 2018</p>
                        <p>University of Chicago, PhD Machine Learning</p>
                <h3 className="head"><b>Technical Skills</b></h3>
                <div>
                        <ul className={"resume"}>
                            <li className={"tech"}>Beginner proficiency with Angular JS</li>
                            <li className={"tech"}>Intermediate proficiency with Swift, Java, Python, C++, and Ruby on Rails</li>
                            <li className={"tech"}>Intermediate proficiency using HTML and CSS and React</li>
                        </ul>
                </div>
                <div className={"intern"}>
                    <h3><b>Internship Experience</b></h3>
                    <p><b>Code2040 Fellow PWC Software Engineering Intern: Summer 2017</b></p>
                        <ul className={"resume"}>
                            <li className={"tech"}>• Implemented a force touch menu and a deep link for the force touch menu in the existing iOS app so that users can go directly to a certain module within the application without having to enter the application</li>
                            <li className={"tech"}>• Developed a speech to text Microsoft API into an existing iOS app in order to make linguistic commands and make the user experience in using the application more seamless</li>
                            <li className={"tech"}>• Created a User Interface for the different navigation pages within the client app using CSS</li>
                        </ul>
                </div>
            <div className={"intern"}>
                <p><b>Code2040 Fellow Goldman Sachs Software Engineering Intern: Summer 2018</b></p>
                <ul className={"resume"}>
                    <li className={"tech"}>• Implemented a force touch menu and a deep link for the force touch menu in the existing iOS app so that users can go directly to a certain module within the application without having to enter the application</li>
                    <li className={"tech"}>• Developed a speech to text Microsoft API into an existing iOS app in order to make linguistic commands and make the user experience in using the application more seamless</li>
                    <li className={"tech"}>• Created a User Interface for the different navigation pages within the client app using CSS</li>
                </ul>
            </div>
            <div className={"intern"}>
                <p><b>LookLive Software Engineering Intern: Fall/Spring 2017</b></p>
                <ul className={"resume"}>
                    <li className={"tech"}>• Created User Interface pages within the iOS app for all of the clothing modules and search engine for a better user experience using Java and Javascript</li>
                    <li className={"tech"}>• Developed SQLite database to hold user information and RESTful calls to backend to display profile data upon the user logging into the native iOS application</li>
                </ul>
            </div>

            <div className={"intern"}>
                <h3><b>Projects</b></h3>
                <p><b>College Suggestion Web App</b></p>
                <ul className={"resume"}>
                    <li className={"tech"}>• Developed a website that makes suggests to users on colleges with a certain average starting salary after graduation using a BigQuery database built into Google App Engine, making queries to the database using a Java API and javascript for the buttons</li>
                </ul>
                <p><b>Shoppers Web App</b></p>
                <ul className={"resume"}>
                    <li className={"tech"}>• Built a React web application that allows users to buy, sell and lend shoes. The application uses Google Vision to find similar shoes to suggest to users based on the type of shoes they are looking for. It also utilizes machine learning on the backend to validate if the shoes in are in condition to sell or lend using a series of classification techniques. Deployed this application using Google App Engine</li>
                </ul>
            </div>
            <div className={"intern"}>
                <h3><b>Leadership/Awards</b></h3>
                <p className={"awards"}>
                    McNair Scholar                                                  Member                                                      Spring 2017
                    <br/>
                    Code2040 Fellow                                                 Fellow                                                      Summer 2017/2018
                    <br/>
                    BDPA Atlanta Chapter                                            Member                                                      Spring 2015-Present
                    <br/>
                    Beta Kappa Chi Honor Society                                    Vice President                                              Spring 2016-Present
                </p>
            </div>
            </body>
            </html>


        );
    }




}
export default Resume;