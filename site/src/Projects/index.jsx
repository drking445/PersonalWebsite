import React from 'react';
//import logger from 'logging-library';
//import FileViewer from 'react-file-viewer';
import bag from './images/shopping.jpeg';

const goat = {
    fontSize: 20,
    fontFamily: "Arial"
};

class Projects extends React.Component{

    render(){
        return(

            <html>
            <title>Projects</title>
            <h1>Projects Page</h1>
            <body>
            Projects Will Be Shown Here:
            <div>
                <a href={"https://goat-227213.appspot.com/"} ><img src={bag} alt={"Shoppers"}/> </a>
                <p style={goat}>In this React application I offer a service that I love to do in my free time, reselling! In this application you can buy, sell and lend clothes. This lending functionality is unlike anything on the current market and makes this app special. I hope you use it and love it!</p>
            </div>
            </body>
            </html>


        );
    }




}
export default Projects;