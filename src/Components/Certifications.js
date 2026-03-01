import React, {useState} from "react";
import "yet-another-react-lightbox/styles.css";
import servicesBg from '../images/servicesBg.jpg'
import { BiCertification } from "react-icons/bi";
import data from "../data/cert.json";
import otherData from "../data/certTwo.json";
import Modal from "./Modal";
import { MdConnectWithoutContact } from "react-icons/md";
import emailjs from 'emailjs-com'
import contactBg from '../images/contactBg.jpg'


function Certifications(props) {
  const [clickedImg, setClickedImg] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const submit = () => {
      if (name && email && message) {
        const serviceId = 'service_05hf1qj';
        const templateId = 'template_azdiyjk';
        const userId = 'GWelQe7mDCutjawxE';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
            alert("Message Sent!");
  
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(false);
      } else {
          alert('Please fill in all fields.');
      }
  }

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
                          
                         
                              <div className= 'companyBg' style={{backgroundImage:`url(${contactBg})`}}>
                                 <h1 className="font-face-gm" style={{ color: 'rgba(39, 41, 64)', textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>
                              <MdConnectWithoutContact className="App-logo"/> Contact
                          </h1>
                                  <div className="contactWrapper">
                                      <div className="cert">
                                          <div className="container">
                                              <div className="cardServices mb-3" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)', textAlign: 'left', marginLeft: '30px', opacity: 0.79}}>
                                                  <div className="card-body">
                                                      <div className="row mb-3">
                                                          <label for="exampleFormControlInput1" className="form">Your Name</label>
                                                              <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                                                                  <label for="exampleFormControlInput1" className="form">Your Email</label>
                                                              <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                                                                  <label for="exampleFormControlTextarea1" className="form">Your message</label>
                                                              <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                                          <div className='col text-center'>
                                                              <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={submit}>Send Message</button>
                                                                  <span className={emailSent ? 'visible' : null}></span>
                                                          </div>
                                                      </div>
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