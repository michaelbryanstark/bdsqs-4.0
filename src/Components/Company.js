import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { HiBuildingOffice } from 'react-icons/hi2';
import bryan from '../images/bryan.jpg';
import mike from '../images/mike.jpg';
import Section from './Section';
import ContactSection from './ContactSection';

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
