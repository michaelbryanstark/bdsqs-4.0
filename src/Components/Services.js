import React from "react";
import ParticlesBg from 'particles-bg'
// import codeshare from "../images/codeshare.jpg"
// import bdsqs from "../images/bdsqs.jpg"
// import pirate from "../images/pirate.png"


function Services() {
    return(
        <>
        <div className="cert">
        <h2 className="welcome-text">What We Offer</h2>
        <>
        
        <div class="container">
    <div class="row">
     
            <div class="card text-white text-lrft bg-secondary mb-3">
                <div class="card-body">
        <p class="text-left">
                        <ul>
                            <li>Consulting in the areas of Quality Management System gap analysis, development, and deployment.</li>  
                            
                            <li>Performance of internal (first party) and external (second party) audits to include AS 9100, ISO 9001, ISO 13485 and ANSI/ESD 20.20.</li>  
                            
                            <li>Quality training to include internal auditing, ISO 9001, and AS 9100 .</li> 
                             
                            <li>Consulting in supplier development and improvement.</li>
                            
                            <li>Web Development Services (Python, JavaScript, React, Django, PostgreSQL, Node.js, MongoDB, REST APIs, HTML, CSS, jQuery, JSON, JSON Web Tokens)</li>
                        </ul>

                        </p>
                        
                        </div>
          
              </div>
         </div>
    </div>
      </>
            </div>
         
       
        <ParticlesBg type="cobweb" bg={true} />
        </>
        
    )
}

export default Services;