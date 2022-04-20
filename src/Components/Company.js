import React from "react";
// import { Collapsible } from 'collapsible-react-component'
// import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'
import bryan from '../images/bryan.jpg'
import mike from '../images/mike.jpg'

const Company = (props) => {
    // const [open, setOpen] = React.useState(false)
    return (
        <>
        <div>
            <div className="App-header">
                <h2 className="welcome-text">Our Company</h2>
            </div>
                <div className="company">
                    <div className="about">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col">
                                <div className="card text-center h-100 bg-secondary">
                                    <div className="image">
                                        <img src={bryan} alt="bryan"/>
                                    </div>
                                <div className="card-body">
                                    <h3 className="card-title">Bryan Stark</h3>
                                        <p className="card-text">Bryan, the founder of the company, has over 15 years of experience in Supervisor/Quality Engineering roles in Computer Engineering, Semiconductor, & Aerospace Industry.</p>
                                </div>
                            </div>
                        </div>
                    <div className="col">
                        <div className="card text-center h-100 bg-secondary">
                            <div className="image">
                                <img className="mike" src={mike} alt="mike"/>
                            </div>
                        <div className="card-body">
                            <h3 className="card-title">Michael Stark</h3>
                                <p className="card-text">Software Engineer and Web Developer, Michael has 10+ years in project management and has overseen the developement and deployment of numerous apps across the web.</p>
                        </div>
                            <div>
                                <button type='button' className="btn btn-outline-info"onClick={()=> window.open("https://www.michaelbryanstark.com/", "_blank")}>Visit Portfolio </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    );
};

export default Company;