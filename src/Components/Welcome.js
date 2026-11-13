import React from 'react';
import { HiCpuChip } from 'react-icons/hi2';
import Masthead from './Masthead';
import Section from './Section';
import ContactSection from './ContactSection';

const services = [
  'Consulting in Quality Management System gap analysis, development, and deployment.',
  'Internal (first party) and external (second party) audits, including AS 9100, ISO 9001, ISO 13485, and ANSI/ESD 20.20.',
  'Quality training, including internal auditing, ISO 9001, and AS 9100.',
  'Consulting in supplier development and improvement.',
  'Web development (Python, JavaScript, React, Django, PostgreSQL, Node.js, MongoDB, REST APIs, HTML, CSS, jQuery, JSON, JSON Web Tokens).',
];

function Welcome() {
  return (
    <>
      <Masthead />
      <Section title="Welcome to BDS Quality Services">
        <div className="prose">
          <p>
            You can expect deep knowledge of Quality Assurance programs built on ISO 9001:2015 and
            AS9100D, including internal assessments and surveillance audits of suppliers.
          </p>
          <p>
            We also develop QA processes, including SPC, Gauge R&amp;R studies, DFMEA, and PFMEA.
            We are productive, adapt well to change, and are meticulous. We excel at troubleshooting,
            problem-solving, and decision-making.
          </p>
          <p>
            Our working knowledge covers JMP, RELEX, Word, Excel, PowerPoint, Windows, Microsoft
            Outlook, Lotus Notes, SAP, and Oracle.
          </p>
        </div>
      </Section>

      <Section id="services" title="Services" icon={HiCpuChip} tone="tint">
        <ul className="rule-list">
          {services.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </Section>

      <ContactSection />
    </>
  );
}

export default Welcome;
