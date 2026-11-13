import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { HiBuildingOffice } from 'react-icons/hi2';
import bryan from '../images/bryan.jpg';
import mike from '../images/mike.jpg';
import Section from './Section';
import ContactSection from './ContactSection';

<<<<<<< HEAD
function Company() {
  return (
    <>
      <Section title="Company" icon={HiBuildingOffice}>
        <div className="people">
          <article className="person">
            <img src={bryan} alt="Bryan Stark" />
            <div>
              <h3>Bryan Stark</h3>
              <p>
                Bryan, the founder of the company, has over 20 years of experience in
                Supervisor and Quality Engineering roles in the computer engineering,
                semiconductor, and aerospace industries.
              </p>
              <SocialIcon url="https://www.linkedin.com/in/bdstark2000/" target="_blank"
                rel="noopener noreferrer" label="Bryan Stark on LinkedIn"
                style={{ height: 40, width: 40 }} />
=======
const Company = (props) => {
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
        <div className="companyBg" style={{ backgroundImage: `url(${codeBg})` }}>
            <h1 className="font-face-gm" style={{ color: 'rgba(222, 185, 146)', textAlign: 'left', marginLeft: '30px', marginBottom: '75px' }}>
                <HiBuildingOffice className="App-logo" />Company
            </h1>
            <div className="company">
                <div className="about">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col">
                            <div className="cardCompany text-center h-100" style={{ color: 'rgba(222, 185, 146)', background: 'rgba(15, 34, 75)', marginLeft: '30px', opacity: 0.8 }}>
                                <div className="image">
                                    <img className="profilePicBryan" src={bryan} alt="bryan" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Bryan Stark</h3>
                                    <p className="card-text">Bryan, the founder of the company, has over 20 years of experience in Supervisor/Quality Engineering roles in Computer Engineering, Semiconductor, & Aerospace Industry.</p>
                                    <SocialIcon className="nav-item" fgColor="white" bgColor="rgba(0, 171, 252,.8)" url="https://www.linkedin.com/in/bdstark2000/" target="_blank" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cardCompany text-center h-100" style={{ color: 'rgba(222, 185, 146)', background: 'rgba(15, 34, 75)', opacity: 0.9 }}>
                                <div className="image">
                                    <img className="profilePicMike" src={mike} alt="mike" style={{ opacity: 1 }} />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Michael Stark</h3>
                                    <p className="card-text">Software Engineer and Web Developer, Michael has 10+ years in project management and has overseen the developement and deployment of numerous apps across the web. Currently he is studying Cybersecurity in order to help defend against the new threats to our systems AI poses. Main goal is your data stays secure. </p>
                                </div>
                                <div>
                                    <button type='button' className="btn btn-outline-info" style={{ color: 'rgba(222, 185, 146)' }} onClick={() => window.open("https://www.michaelbryanstark.com/", "_blank")}>Visit Portfolio </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> a33d89a85e50082abcffa2a1a179e84951e4982b
            </div>
          </article>

          <article className="person">
            <img src={mike} alt="Michael Stark" />
            <div>
              <h3>Michael Stark</h3>
              <p>
                Software engineer and web developer with 10+ years in project management, who
                has overseen the development and deployment of numerous web apps. He is
                currently studying cybersecurity to help defend systems against the new threats
                AI poses.
              </p>
              <a className="btn btn--ghost" href="https://www.michaelbryanstark.com/"
                target="_blank" rel="noopener noreferrer">Visit portfolio</a>
            </div>
          </article>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}

export default Company;
