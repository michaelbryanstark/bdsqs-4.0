import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>BDSQS</Link>
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
            <ul className="navbar-nav">
                {/* <li className="nav-item active">
                    <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/company'>Company</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/certifications'>Certifications</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to='/services'>Services</NavLink>
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