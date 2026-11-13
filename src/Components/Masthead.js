import React from 'react';
import bg2 from '../images/bg2.jpg';

function Masthead() {
  return (
    <header className="masthead" style={{ backgroundImage: `url(${bg2})` }}>
      <div className="masthead__inner">
        <img className="masthead__logo" src={`${process.env.PUBLIC_URL}/logo-badge.svg`} alt="" />
        <div className="masthead__text">
          <h1>BDS Quality Services</h1>
          <p>Your ISO 9001 / AS9100 internal assessment provider</p>
        </div>
      </div>
    </header>
  );
}

export default Masthead;