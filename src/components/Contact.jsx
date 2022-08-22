import React from 'react'
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "../assets/contact.module.css"
import validate from "./validate"
import emailjs from '@emailjs/browser';

export default function Contact() {
  const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID,REACT_APP_PUBLIC_KEY }= process.env
  const [buttonText, setButtonText] = useState('Send');
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: '',
    last: '',
    email: '',
    phone: '',
    message: ''
  });
  const onFormUpdate = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      })
      setError(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      input.name &&
      input.last &&
      input.email &&
      input.phone &&
      input.message &&
      !Object.keys(error).length
    ){
    setButtonText("Sending...");
    emailjs.sendForm('service_017r5w8','template_qteph3f',e.target,'y-qa3iJiDmglHVCU6')
      .then((result) => {
          console.log(result.text); 
      }, (error) => {
          console.log(error.text);
      });
    setButtonText("Send");
    setInput({name: '',last: '',email: '',phone: '', message: ''
    });
    }
    else{ alert(`Needs completing... ${Object.keys(error)}`) }
 
  };


  return (
    <section className={s.contact} id="contact">
      <Container>
        <Row className={s.row2}>
          <Col size={12} md={6}>
           <h2>Contact me</h2>
                <form id="form" onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6}>
                      <input type="text" name="name" id="name"
                      value={input.name} placeholder="First Name" 
                      onChange={onFormUpdate} />

                    {error.name && <span className={s.error}>{error.name}</span>}
                    </Col>

                    <Col size={12} sm={6}>
                      <input type="text" name="last" id="last"
                      value={input.last} placeholder="Last Name"
                       onChange={onFormUpdate}/>
                                   {error.last && <span className={s.error}>{error.last}</span>}
                    </Col>
     
                    <Col size={12} sm={6}>
                      <input type="email" name="email" id="email"
                      value={input.email} placeholder="Email Address"
                       onChange={onFormUpdate} />
                    {error.email && <span className={s.error}>{error.email}</span>}
                    </Col>

                    <Col size={12} sm={6}>
                      <input type="tel" name="phone" id="phone"
                      value={input.phone} placeholder="Phone No." 
                      onChange={onFormUpdate}/>
                    {error.phone && <span className={s.error}>{error.phone}</span>} 
                    </Col>

                    <Col size={12}>
                      <textarea rows="6" 
                      value={input.message} 
                      placeholder="Message" 
                      name="message"id="message"
                      onChange={onFormUpdate}></textarea>
                    {error.message && <span className={s.error}>{error.message}</span>}
                  
                    </Col>
                      
                    <div className="col-12 mx-auto">
                     <button type="submit" id="button">
                        <span>{buttonText}</span></button> 

                    </div>
                  </Row>
                </form>
             
          </Col>
        </Row>
      </Container>
    </section>
  )
}