import React from "react";
import servicesBg from '../images/servicesBg.jpg'



function Certifications() {
  
    return (

        <div className= 'companyBg' style={{backgroundImage:`url(${servicesBg})`}}>
        <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
        Certifications
        </h1>
        <div className="cert">  
        <div className="wrapper">
        <div class="container">
    <div class="row">
     
            <div class="cardServices mb-3" style={{ color: 'rgba(222, 185, 146)', marginLeft: '30px', background:'rgba(15, 34, 75)', opacity: 0.79}}>
               <h3>Credentials</h3>
                <div class="card-body">
        <p>
        <h3>ASQ Certified Quality Auditor</h3>  
                           <p>Issuing authority ASQ - World Headquarters</p> 
                              <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={()=> window.open("https://credentials.asq.org/7363e433-175b-4627-9f1a-4bef135c684e", "_blank")}>See Credential</button>


                    <h3>AS9100 Rev D and ISO 9001:2015 Lead Auditor</h3> 
                        <p>Issuing authority PROBITAS</p> 

                        </p>
                        
                        </div>
          </div>
              </div>
         </div>
    </div>

</div>
    </div>
        
    )
}

export default Certifications;