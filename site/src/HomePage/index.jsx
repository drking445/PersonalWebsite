import React from 'react';
import './home.css';
import  jordan from './jordans.png';
class HomePage extends React.Component {

    render() {
        return (
            <html>
            <title>A Peak Into My Life</title>
            <body>
            <h1> Demetrius King Jr.</h1>
            <h2>New Production Build</h2>
            <body>
            Projects Will Be Shown Here:
            <img src={jordan} className={"jordan"}/>

            <body> This is the Flinder application: </body>
            </body>
            </body>
            </html>
        );
    }
}

export default HomePage;