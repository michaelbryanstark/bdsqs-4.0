import React, {useState} from "react";
import "yet-another-react-lightbox/styles.css";
import servicesBg from '../images/servicesBg.jpg'
import { BiCertification } from "react-icons/bi";
import data from "../data/cert.json";
import otherData from "../data/certTwo.json";
import Modal from "./Modal";




function Certifications() {
  const [clickedImg, setClickedImg] = useState(null);
 

  const handleClick = (item, index) => {

    setClickedImg(item.link);
  };

  

    return (

        <div className= 'companyBg' style={{backgroundImage:`url(${servicesBg})`}}>
          <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'left', marginLeft: '30px', marginBottom: '75px'}}>
            <BiCertification className="App-logo"/>Certifications
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
                              {data.data.map((item, index) => (
                                <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={()=> handleClick(item, index)}>
                                  See Credential 
                                </button>))}
                            <h3>AS9100 Rev D and ISO 9001:2015 Lead Auditor</h3> 
                              <p>Issuing authority PROBITAS</p> 
                              {otherData.data.map((item, index) => (
                                <button type="button" className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={() => handleClick(item, index)}>
                                  See Credential
                                </button>))}
                              <div>
                                {clickedImg && (
                                  <Modal
                                    clickedImg={clickedImg}
                                    setClickedImg={setClickedImg}
                                  />
                                )}
                              </div>                                                          
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