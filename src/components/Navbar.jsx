import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../scss/navbar.scss';
import logo from '../images/logo.png';
import { MdOutlineClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState('nav_linkscontainer');
  const navToggler=()=>{
    if(
      
      active==="nav_linkscontainer"){
        setActive("nav_linkscontainer nav_active")
    }else{
      setActive("nav_linkscontainer");
    }
  }

  return (
    <div className='navbar_bgcontainer'>
     
      <div className='navcontainer'>
       <MdMenu className='menu'  onClick={navToggler}/>
        <div className='logo'>
         
          <img src={logo} alt='logo' />
        </div>
        <div className= {active}> 
          <MdOutlineClose className='closebtn' onClick={navToggler}  />
          <ul>
            <li>
              <ScrollLink to="topsection_header" smooth={true} duration={500}>HOME</ScrollLink>
            </li>
            <li>
              <ScrollLink to="aboutme" smooth={true} duration={500}>ABOUT</ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={500}>SKILL</ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500}>PROJECT</ScrollLink>
            </li>
            <li>
              <ScrollLink to="blog" smooth={true} duration={500}>BLOG</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>CONTACT</ScrollLink>
            </li>
            <li>
              <ScrollLink to="service" smooth={true} duration={500}>SERVICE</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
