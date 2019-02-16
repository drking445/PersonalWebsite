import React from 'react';
//import logger from 'logging-library';
//import FileViewer from 'react-file-viewer';
import bag from './images/shopping.jpeg';
import fair from './images/fair.png';

const goat = {
    fontSize: 20,
    fontFamily: "Arial"
};

const collegeFair = {
    paddingTop: 25
};

class Projects extends React.Component{

    render(){
        return(

            <html>
            <title>Projects</title>
            <h1>Projects Page</h1>
            <body>
            Projects Will Be Shown Here:
            <div style={collegeFair}>
                <a href={"https://goat-227213.appspot.com/"} ><img src={bag} alt={"Shoppers"}/> </a>
                <p style={goat}>In this React application I offer a service that I love to do in my free time, reselling! In this application you can buy, sell and lend clothes. This lending functionality is unlike anything on the current market and makes this app special. I hope you use it and love it!</p>
            </div>
            <div style={collegeFair}>
                <a href={"https://spelman-472-2017-1.appspot.com/"} ><img src={fair} alt={"Fair"}/> </a>
                <p style={goat}>In this web application I developed a way for prospective college students to find schools that fit a number of their interests. This is a favorite app of mine because it solves a problem many of my friends have had and I hope to continue to working on this app to make it better in the future!</p>
            </div>
            </body>
            </html>


        );
    }




}
export default Projects;