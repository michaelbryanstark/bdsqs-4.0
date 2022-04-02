import React from "react";
import ParticlesBg from 'particles-bg'
// import codeshare from "../images/codeshare.jpg"
// import bdsqs from "../images/bdsqs.jpg"
// import pirate from "../images/pirate.png"


function Certifications() {
    return(
        <>
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                Certifications
            </h1>
        </div>
        <div className="tech">
       
        <>
        {/* <button
          type='button'
          className="btn btn-outline-secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Technical Skills'}
        </button> */}
        {/* <Collapsible open={open}> */}
            <table>
                <tr>
                    <td>
                        AJAX
                    </td>
                    <td>
                        Django
                    </td>
                     <td>
                        EJS
                    </td>
                </tr>
                <tr>
                    <td>
                        Express.js
                    </td>
                    <td>
                        HTML & CSS
                    </td>
                    <td>
                        JavaScript
                    </td>
                </tr>
                <tr>
                    <td>
                        jQuery 
                    </td>
                    <td>
                        JSON
                    </td>
                    <td>
                        JWT
                    </td>
                </tr>
                <tr>
                    <td>
                        MongoDB
                    </td>
                    <td>
                        Mongoose
                    </td>
                    <td>
                        MVP Frameworks
                    </td>
                </tr>
                <tr>
                    <td>
                        Node.js 
                    </td>
                    <td>
                        Python
                    </td>
                    <td>
                        PostgreSQL
                    </td>
                </tr>
                <tr>
                    <td>
                        React 
                    </td>
                    <td>
                        RESTful APIs 
                    </td>
                    <td>
                        TypeScript
                    </td>
                </tr>
            </table>
        {/* </Collapsible> */}
      </>
        {/* <Popup trigger={<button type='button'
          className="btn btn-outline-secondary"> Resume</button>} position="left center">
            <div><img src={Resume} alt="Resume"/></div>
        </Popup> */}
            </div>
         
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
        
    )
}

export default Certifications;