import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo9 from "../images/logo9.png";

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className='logo' src={logo9} alt="logo"/>

        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <h1 className="welcome-text"> BDS Quality Services </h1>
            <ul className="navbar-nav" >
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/'>Home</NavLink>
                </li>
                 {/* <li className="nav-item">
                    <NavLink className="nav-link" exact to='/services'>Services</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/certifications'>Certifications</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/company'>Company</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/contact'>Contact</NavLink>
                </li>
            </ul>
            
            <SocialIcon className="nav-item ml-auto" url="https://www.linkedin.com/in/bdstark2000/" target="_blank" />
        </div>
    </nav>
);

export default navbar;