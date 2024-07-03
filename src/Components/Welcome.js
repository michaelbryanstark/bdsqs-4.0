import React, { useState } from 'react'
import "../App.css";
import homeImg from '../images/homeImg.jpg'
import serviceBg from '../images/serviceBg.jpg'
import emailjs from 'emailjs-com'
import contactBg from '../images/contactBg.jpg'
import { MdConnectWithoutContact } from "react-icons/md";
import { HiCpuChip } from "react-icons/hi2";



const Welcome = (props) => {
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

    return (
        <div>  
            <div  className="companyBg" style={{backgroundImage:`url(${homeImg})`}}>                
                <div className="cert">               
                    <div class="container">
                        <div class="row">
                            <div class="cardHome mb-3" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)', textAlign: 'left', opacity: 0.79, padding: '15px'}}>
                                <h2 style={{textAlign: 'left', marginBottom: '30px'}}>Welcome to BDS Quality Services
                                </h2>
                                    <div class="card-intro">
                                        <p class="card-text" style={{textAlign: 'left'}}>
                                            When you come to BDS Quality Services, you can expect exceptional knowledge of numerous Quality Assurance Programs utilizing ISO 9001:2015 & AS9100D, which include internal assessments and surveillance audits of suppliers. 
                                            What we as a company can offer includes, but is not limited to, QA Process Development which include SPC, Guage R&R studies, DFMEA, & PFMEA Development. 
                                            Here at BDS Quality Services we are productive, multi-task oriented, adapt well to change, and are meticulous. We excel at troubleshooting, problem-solving, and decision-making. 
                                            We come with a strong working knowledge of JMP, RELEX, Word, Excel, Powerpoint, Windows, Microsoft Outlook, Lotus Notes, E-mail, SAP, & Oracle to suit your every need.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>
            <h1 className="font-face-gm" style={{ color: 'rgba(39, 41, 64)', textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>
                <HiCpuChip className="App-logo"/>  Services
            </h1>
                <div className="serviceBg" style={{backgroundImage:`url(${serviceBg})`}}>
                    <div className="wrapper">
                        <div className="cert">
                            <div class="container">
                                <div class="row">
                                    <div class="cardServices mb-3" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)', opacity: 0.79, padding: '15px'}}>
                                        <div class="card-intro">
                                            <p class="card-text" style={{textAlign: 'right'}}>
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
                        </div>
                    </div>
                </div>

            <>
            <h1 className="font-face-gm" style={{ color: 'rgba(39, 41, 64)', textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>
                <MdConnectWithoutContact className="App-logo"/> Contact
            </h1>
                <div className= 'companyBg' style={{backgroundImage:`url(${contactBg})`}}>
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
            </>
    </div>
)
};

export default Welcome;
