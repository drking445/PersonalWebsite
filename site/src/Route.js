import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import Resume from './Resume';
import About from './About Me';
import Nav from './NavBar';
import FutureWork from './FutureWork';

const divStyle={
    textAlign: "center"
}

const Routes = () => (
    <main>
        <Nav/>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/future' component={FutureWork}/>
    </Switch>
        <div style={divStyle}> &copy; Created by Demetrius King</div>
    </main>
)


export default Routes;
