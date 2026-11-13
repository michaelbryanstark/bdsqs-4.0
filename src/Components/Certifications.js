import React, { useState } from 'react';
import { BiCertification } from 'react-icons/bi';
import data from '../data/cert.json';
import otherData from '../data/certTwo.json';
import Modal from './Modal';
import Section from './Section';
import ContactSection from './ContactSection';

const credentials = [
  { title: 'ASQ Certified Quality Auditor', issuer: 'ASQ - World Headquarters', items: data.data },
  { title: 'AS9100 Rev D and ISO 9001:2015 Lead Auditor', issuer: 'PROBITAS', items: otherData.data },
];

function Certifications() {
  const [selected, setSelected] = useState(null); // { link, alt }

  return (
    <>
      <Section title="Certifications" icon={BiCertification}>
        <ul className="credential-list">
          {credentials.map(({ title, issuer, items }) => (
            <li key={title} className="credential">
              <div>
                <h3>{title}</h3>
                <p>Issued by {issuer}</p>
              </div>
              <div className="credential__actions">
                {items.map((item, i) => (
                  <button key={item.link} type="button" className="btn btn--ghost"
                    onClick={() => setSelected({ link: item.link, alt: `${title} credential` })}>
                    View credential{items.length > 1 ? ` ${i + 1}` : ''}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <ContactSection />

      {selected && (
        <Modal clickedImg={selected.link} alt={selected.alt}
          setClickedImg={(v) => !v && setSelected(null)} />
      )}
    </>
  );
}

export default Certifications;