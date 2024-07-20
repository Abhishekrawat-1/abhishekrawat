// src/components/Service.js
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import '../scss/Service.scss';
import { MdWeb } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { LuAppWindow } from "react-icons/lu";
import { MdOutlinePictureInPicture } from "react-icons/md";

const cards = [
  {
    icon:  <MdWeb className='icons_web' />,
    title: 'Web Design',
    description: 'Transform your ideas into visually captivating and user-friendly websites. We focus on aesthetics, usability, and accessibility to ensure your site stands out and delivers an exceptional user experience.' 
  },
  {
    icon: <CgWebsite className='icons_web' />,
    title: 'Web Application',
    description: 'Build powerful and scalable web applications tailored to your business needs. Our team of experts leverages the latest technologies to develop interactive and feature-rich applications that enhance your operational efficiency.'
  },
  {
    icon: <LuAppWindow className='icons_web' />,
    title: 'Desktop Application',
    description: 'Develop high-performance desktop applications that streamline your business processes. We create custom software solutions that are reliable, secure, and tailored to your unique requirements.'
  },
  {
    icon: <MdOutlinePictureInPicture className='icons_web'/>,
    title: 'Banner Design',
    description: 'Make a lasting impression with our professional banner design services. Whether for online advertising or physical displays, we create visually compelling banners that effectively communicate your brand message.'
  }
];

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className={`card-list ${isVisible ? 'visible' : ''}`} ref={cardRef}>
      <p>I AM GREAT AT</p>
      <h3>We do awesome services for our clients</h3>
      <div className="cards-container">  
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
      </div>
    </div>
  );
};

export default Service;
