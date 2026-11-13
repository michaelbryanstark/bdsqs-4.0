import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo9 from '../images/logo9.png';

// React Router v6: `end` matches exactly. On v5, replace `end` with `exact`.
const links = [
  { to: '/', label: 'Home' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/company', label: 'Company' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Main">
      <NavLink to="/" className="site-nav__brand" onClick={() => setOpen(false)}>
        <img src={logo9} alt="" />
        <span>BDS Quality Services</span>
      </NavLink>
      <button className="site-nav__toggle" type="button" aria-expanded={open}
        aria-controls="site-nav-links" onClick={() => setOpen((o) => !o)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <ul id="site-nav-links" className={`site-nav__links${open ? ' is-open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end onClick={() => setOpen(false)}>{label}</NavLink>
          </li>
        ))}
        <li>
          <SocialIcon url="https://www.linkedin.com/in/bdstark2000/" target="_blank"
            rel="noopener noreferrer" label="BDS Quality Services on LinkedIn"
            style={{ height: 36, width: 36 }} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
