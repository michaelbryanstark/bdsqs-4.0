import React from "react";
import "../App.css";
// import { Collapsible } from 'collapsible-react-component'
// import 'collapsible-react-component/dist/index.css'
// import ParticlesBg from 'particles-bg'


const Welcome = (props) => {
    // const [open, setOpen] = React.useState(false)
    return (
        <>
        
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                Welcome to BDS Quality Services
            </h1>
        </div>
        <div className="intro">
        <>
        {/* <button
          type='button'
          className="btn btn-outline-secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Who am I?'}
        </button> */}
        {/* <Collapsible open={open}> */}
        <p class="card-text">
                        When you come to BDS Quality Services, you can expect exceptional knowledge of numerous Quality Assurance Programs utilizing ISO 9001:2015 & AS9100D, which include internal assessments and surveillance audits of suppliers. 

                        What we as a company can offer includes, but is not limited to, QA Process Development which include SPC, Guage R&R studies, DFMEA, & PFMEA Development. 

                        Here at BDS Quality Services we are productive, multi-task oriented, adapt well to change, and are meticulous. We excel at troubleshooting, problem-solving, and decision-making. 

                        We come with a strong working knowledge of JMP, RELEX, Word, Excel, Powerpoint, Windows, Microsoft Outlook, Lotus Notes, E-mail, SAP, & Oracle to suit your every need.</p>
        {/* </Collapsible> */}
      </>
            </div>
         
        </div>
        {/* <ParticlesBg type="cobweb" bg={true} /> */}
        </>
    );
};

export default Welcome;
