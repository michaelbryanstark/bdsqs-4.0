import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// EmailJS public keys are designed to be exposed; env vars just keep them out of source.
// Restrict allowed domains in your EmailJS dashboard.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_05hf1qj';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_azdiyjk';
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || 'GWelQe7mDCutjawxE';

const EMPTY = { name: '', email: '', message: '' };

function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
      setValues(EMPTY);
      setStatus('sent');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" type="text" autoComplete="name" required
          value={values.name} onChange={update('name')} />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Your email</label>
        <input id="contact-email" type="email" autoComplete="email" required
          placeholder="name@example.com" value={values.email} onChange={update('email')} />
      </div>
      <div className="field">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" rows="5" required
          value={values.message} onChange={update('message')} />
      </div>
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === 'sent' && 'Message sent. We will reply to your email soon.'}
        {status === 'error' && 'The message did not send. Check your connection and try again.'}
      </p>
    </form>
  );
}

export default ContactForm;
