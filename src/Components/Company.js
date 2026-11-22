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
                                Bryan, the visionary founder of the company, brings more than two decades
                                of hands-on leadership and technical expertise to everything we do. Throughout his
                                distinguished career, he has held key supervisory and quality engineering roles across
                                the computer engineering, semiconductor, and aerospace industries, where precision,
                                reliability, and excellence are non-negotiable.
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
                                Full Stack Developer engineering experience toward cybersecurity and IT infrastructure.
                                With a background in Physics and Operations Management, it taught him to break complex
                                systems into logical parts and find where they fail. As a freelance web developer, he has
                                helped build apps for clients and seen firsthand how easily security gets overlooked under deadline pressure.
                                Michael is now studying cybersecurity to bring a developer's perspective to systems and network security, and is
                                currently preparing for CompTIA Security+ and Network+ certifications.
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
