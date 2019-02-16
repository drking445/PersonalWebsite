import React from 'react';
import './home.css';
import  jordan from './jordans.png';
class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          show: false
        };
        this.click = this.click.bind(this);
    }

    click() {
        /*
        cloudinary.openUploadWidget(
            {
                cloud_name: 'demo',
                upload_preset: 'a5vxnzbp',
                sources: [ 'local', 'url', 'camera', 'image_search',
                    'facebook', 'dropbox', 'google_photos' ],
                google_api_key: '.....' },
            function(error, result) { console.log(error, result) });

            */
        this.setState({show: !this.state.show});
    }
    render() {
        return (

            <html>
            <body className={this.state.show ? "ab2" : "ab"}>
            <title>A Peak Into My Life</title>
            <h2 className={"homepage"}>Welcome to my HomePage!</h2>
            <p className={"homep"}>Here you can learn more about me, looking at my resume, and observe some of my passion projects!</p>
            <button id={"theme"} onClick={this.click}>Change Theme</button>
            <img src={jordan} className={"jordan"} align="middle"/>
            </body>
            </html>
        );
    }
}

export default HomePage;