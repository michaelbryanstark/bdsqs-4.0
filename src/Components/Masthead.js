import React from 'react';
import bg2 from "../images/bg2.jpg";

function masthead() {
    
    return (
        <div className="masthead" style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: 'cover',
            overflow: 'hidden',
          }}>
   
            <div className="App-header">
                <h1 className="welcome-text"> BDS Quality Services </h1>
                    <h5> Your ISO9000/AS9100 Internal Assessment Provider </h5>
            </div>
        </div>
  

    )
}

export default masthead;