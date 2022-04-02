import React, { useState } from 'react'
// import { Collapsible } from 'collapsible-react-component'
// import 'collapsible-react-component/dist/index.css'
import ParticlesBg from 'particles-bg'
// import selfie from "../images/selfie.jpg"
import emailjs from 'emailjs-com'


const Contact = (props) => {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
      if (name && email && message) {
        const serviceId = 'service_2rh69zk';
        const templateId = 'template_ighzcwc';
        const userId = 'GWelQe7mDCutjawxE';
        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
  
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(false);
      } else {
          alert('Please fill in all fields.');
      }
  }
//   const isValidEmail = email => {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return regex.test(String(email).toLowerCase());
// };

    return (
        <>
        <div>
            <div className="App-header">
            <h1 className="welcome-text">
                Contact
            </h1>
            {/* <img className="dan" src={selfie} alt="selfie"/> */}
        </div>
        <div className="intro">
        <>
        <button
          type='button'
          className="btn btn-outline-secondary"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? 'Close' : 'Contact'}
        </button>
        {/* <Collapsible open={open}> */}
        <div class="row mb-3">
        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <label for="exampleFormControlInput1" class="form-label">Your Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button type='button'
          className="btn btn-outline-secondary" onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}></span>
        </div>
            
        {/* </Collapsible> */}
      </>
            </div>
         
        </div>
        <ParticlesBg type="cobweb" bg={true} />
        </>
    );
};

export default Contact;