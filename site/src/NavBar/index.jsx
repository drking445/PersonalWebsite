import React from 'react';
import { Link } from 'react-router-dom';
import '../About Me/about.css';
const NavBar = () => (
    <html>
    <ul className="container-fluid bg-4 text-center">
        <li><Link to={'/'}>Home </Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li>Future Work</li>
        <li><Link to={'/resume'}>Resume</Link></li>
        <li><Link to={'/about'}>About Me </Link></li>
    </ul>
    </html>
)

export default NavBar;