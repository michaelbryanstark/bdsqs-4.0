import React from 'react';
import finalHeader3 from "../images/finalHeader3.jpg";

function masthead() {
    
    return (
        <div className="masthead" style={{
            backgroundImage: `url(${finalHeader3})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
          }}>
   
            <div className="App-header">
            <h1 className="welcome-text">
                Welcome to BDS Quality Services
            </h1>
            <p>Your ISO9000/AS9100 Internal Assessment Provider</p>
        </div>
                </div>
  

    )
}

export default masthead;