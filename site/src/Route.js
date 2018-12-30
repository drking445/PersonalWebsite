import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import Resume from './Resume';
import About from './About Me';
import Nav from './NavBar';

const Routes = () => (
    <main>
        <Nav/>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/about' component={About}/>
    </Switch>
    </main>
)


export default Routes;
