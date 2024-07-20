import React from 'react';
import Navbar from '../components/Navbar';
import TopSection from '../components/TopSection';
import Aboutme from '../components/Aboutme';
import Skills from '../components/Skills';
import Service from '../components/Service';
import HavingProject from '../components/HavingProject';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Blog from './Blog';
import '../scss/home.scss'

function Homepage() {
  return (
    <div className="home">
      <div id="topsection_header" className='topsection_header'>
        <Navbar />
        <TopSection />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="projects">
        <HavingProject />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
