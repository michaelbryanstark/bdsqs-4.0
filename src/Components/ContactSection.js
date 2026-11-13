import React from 'react';
import { MdConnectWithoutContact } from 'react-icons/md';
import Section from './Section';
import ContactForm from './ContactForm';

function ContactSection() {
  return (
    <Section id="contact" title="Contact" icon={MdConnectWithoutContact} tone="dark">
      <div className="panel">
        <ContactForm />
      </div>
    </Section>
  );
}

export default ContactSection;
