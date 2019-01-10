import React from 'react';
import { Link } from 'react-router-dom';
import '../About Me/about.css';
const NavBar = () => (
    <html>
    <ul className="container-fluid bg-4 text-center">
        <li className={"nav"}><Link to={'/'}>Home </Link></li>
        <li className={"nav"}><Link to='/projects'>Projects</Link></li>
        <li className={"nav"}>Future Work</li>
        <li className={"nav"}><Link to={'/resume'}>Resume</Link></li>
        <li className={"nav"}><Link to={'/about'}>About Me </Link></li>
    </ul>
    </html>
);

export default NavBar;