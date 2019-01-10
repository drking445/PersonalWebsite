import React from 'react';
import './home.css';
import  jordan from './jordans.png';
class HomePage extends React.Component {

    render() {
        return (
            <html>
            <body className={"ab"}>
            <title>A Peak Into My Life</title>
            <h1> Demetrius King</h1>
            <h2>Welcome to my HomePage!</h2>
            <p className={"homep"}>Here you can learn more about me, looking at my resume, and observe some of my passion projects!</p>
            <img src={jordan} className={"jordan"} align="middle"/>

            </body>
            </html>
        );
    }
}

export default HomePage;