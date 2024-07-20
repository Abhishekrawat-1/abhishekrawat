import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../scss/navbar.scss';
import logo from '../images/logo.png';
import { MdOutlineClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

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
              <Link style={{color:"white","text-decoration":"none"}}  to="/">HOME</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/"> ABOUT</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/">SKILL</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/"> PROJECT</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/"> BLOG</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/"> CONTACT</Link>
            </li>
            <li>
            <Link style={{color:"white","text-decoration":"none"}}  to="/"> SERVICE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
