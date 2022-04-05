import React from 'react';
import header from "../images/header.jpg";

function masthead() {
    
    return (
        <div className="masthead" style={{
            backgroundImage: `url(${header})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
          }}>
   
            <div className="App-header">
            <h1 className="welcome-text">
                BDS Quality Services
            </h1>
            <p>Your ISO9000/AS9100 Internal Assessment Provider</p>
        </div>
                </div>
  

    )
}

export default masthead;