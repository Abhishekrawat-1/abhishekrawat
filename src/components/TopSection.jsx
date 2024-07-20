import React from 'react'
import Profile from '../images/profile.png'
import '../scss/topsection.scss'
import Navbar from './Navbar'

const TopSection = () => {

  const downloadPDF = () => {
    const pdfUrl = '/api/assets/resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf'; // The name of the downloaded file

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

    const openWhatsApp = () => {
      const phoneNumber = '919456769021'; 
      const message = 'Hi! I’m interested in your web development services. Can we discuss the details?';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };
  
  return (
    <div className='topcontainer'>
      {/* <Navbar/> */}
      <div className='top_textcontainer'>
        <h4>hello</h4>
    <h1>Hi, I'm <span> Abhishek Rawat </span></h1>
    <h3> I am a Full Stack Web Developer</h3>
    <button className='hirebtn' onClick={openWhatsApp}>Hire me</button>
    <button className='downloadbtn' onClick={downloadPDF}>Resume</button>
    
      </div>
      <div className='profile_imgContainer'>
      <img src={Profile} alt='profile'/> 
      </div>
    </div>
  )
}

export default TopSection
