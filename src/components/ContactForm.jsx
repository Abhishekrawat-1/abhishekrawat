import React, { useState } from 'react';
import '../scss/ContactForm.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import axios from 'axios';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sucess,setSucess]= useState(false)
  const url= "/api/sendmail"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    try {
      
      const response =  await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.data.status==200){
        setSucess(true)
      }
    } catch (error) {
      console.log(error)
      
    }
  };

  return (
    <div className='contact_container'> 
      <h1>CONTACT US</h1>
      <h4>Have a Project?</h4>
        
    <div className="contact-form-container">
      { sucess ? <div  className='sucess_msg'><p>Thank you for reaching out!<br></br> Your message has been successfully sent.<br></br> We will get back to you as soon as possible.</p></div>:  
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      }
      <div className="contact-info">
        <div className="info-item">
          <FaLocationDot className="icon"/>
          <span className="text">Shanti nagar Dhalwala Rishikesh</span>
        </div>
        <div className="info-item">
          < FaPhone className="icon"/>
          <span className="text">+91 9456769021</span>
        </div>
        <div className="info-item">
          <span className="icon">&#x2709;</span>
          <span className="text">rawat.abhishek41@gmail.com</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
