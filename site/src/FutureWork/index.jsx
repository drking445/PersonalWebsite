import React from 'react';
import audio from './images/audio.gif';

const img = {
    width: 150,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto"
};

class FutureWork extends React.Component {

    render() {
        const dish = {id: 'Kelly'};
        return (
            <html>
            <body>
            <title>Future Work</title>
            <h1 className={dish.id}>Here are some of my future project ideas!</h1>
            <h2>Welcome to my HomePage!</h2>
            <div>
                <img src={audio} style={img} align="middle"/>
                <p>I plan on working on a machine learning project that incorporates audio input and from the orchestra in the song on the lyrics, it plays the song from that point in the song. I found this idea a while ago and I hope to implement it in the near future!</p>
            </div>
            </body>
            </html>
        );
    }
}

export default FutureWork;