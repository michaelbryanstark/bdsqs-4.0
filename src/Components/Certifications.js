import React from "react";
import ParticlesBg from 'particles-bg'


function Certifications() {
    return(
        <>
        <div className="cert">
        <>
        <h2 className="welcome-text">Certifications</h2>
        <div class="container">

     
            <div class="card text-white bg-secondary mb-3">
                <div class="card-body">
        <p class="card-text">
            <h3>ASQ Certified Quality Auditor</h3>  
                <p>Issuing authority ASQ - World Headquarters</p> 
                    <button type='button' className="btn btn-outline-info"onClick={()=> window.open("https://credentials.asq.org/7363e433-175b-4627-9f1a-4bef135c684e", "_blank")}>See Credential</button>
                            <br></br>
                            <br></br>

            <h3>AS9100 Rev D and ISO 9001:2015 Lead Auditor</h3> 
                <p>Issuing authority PROBITAS</p> 
                        </p>

          
              </div>
         </div>
    </div>
      </>
            </div>
         
       
        <ParticlesBg type="cobweb" bg={true} />
        </>
        
    )
}

export default Certifications;