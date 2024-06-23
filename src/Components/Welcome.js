import React from "react";
import "../App.css";
import homeImg from '../images/homeImg.jpg'
import serviceBg from '../images/serviceBg.jpg'

const Welcome = (props) => {
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
            <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'center', marginTop: '100px', marginBottom: '50px'}}>
                Services
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
                
        </div>
)
};

export default Welcome;
