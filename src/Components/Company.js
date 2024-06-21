import React from "react";
import { SocialIcon } from 'react-social-icons';
import bryan from '../images/bryan.jpg'
import mike from '../images/mike.jpg'
import codeBg from '../images/codeBg.jpg'

const Company = (props) => {
    return (
        <div className="companyBg" style={{backgroundImage:`url(${codeBg})`}}>
            <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'left', marginTop: '15px', marginLeft: '30px', marginBottom: '75px'}}>
            Company
            </h1>
            <div className="company">
                    <div className="about">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col">
                                <div className="cardCompany text-center h-100" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)', marginLeft: '30px', opacity: 0.8}}>
                                    <div className="image">
                                        <img className="profilePicBryan" src={bryan} alt="bryan"/>
                                    </div>
                                <div className="card-body">
                                    <h3 className="card-title">Bryan Stark</h3>
                                        <p className="card-text">Bryan, the founder of the company, has over 15 years of experience in Supervisor/Quality Engineering roles in Computer Engineering, Semiconductor, & Aerospace Industry.</p>
                                        <SocialIcon className="nav-item" fgColor="white" bgColor="rgba(0, 171, 252,.8)" url="https://www.linkedin.com/in/bdstark2000/" target="_blank" />
                                </div>
                            </div>
                        </div>
                    <div className="col">
                        <div className="cardCompany text-center h-100" style={{ color: 'rgba(222, 185, 146)', background:'rgba(15, 34, 75)', opacity: 0.9}}>
                            <div className="image">
                                <img className="profilePicMike" src={mike} alt="mike" style={{opacity: 1}}/>
                            </div>
                        <div className="card-body">
                            <h3 className="card-title">Michael Stark</h3>
                                <p className="card-text">Software Engineer and Web Developer, Michael has 10+ years in project management and has overseen the developement and deployment of numerous apps across the web.</p>
                        </div>
                            <div>
                                <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)'}} onClick={()=> window.open("https://www.michaelbryanstark.com/", "_blank")}>Visit Portfolio </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Company;