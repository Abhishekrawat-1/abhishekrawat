import React from 'react'
import '../scss/aboutme.scss'
import { ImHeadphones } from "react-icons/im";
import Profile from '../images/profile2.png'

const Aboutme = () => {
  return (
    <div>
      <div className='aboutme_container'>
        <div className='aboutme_profile'>
            <img src={Profile} alt='profile'/>

        </div>
        <div className='aboutme_text'>
            <h6>MY INTRO</h6>
            <h1> About Me</h1>
            <p>I am a Full Stack Web Developer</p>

            <ul>
              <li> <span className='about_heading'>Name:</span> <span className='about_value'> Abhishek Rawat </span></li>
              <li> <span className='about_heading'>Address:</span> <span className='about_value'>Shanti Nagar Dhalwala Rishikesh</span></li>
              <li> <span className='about_heading'>Language:</span> <span className='about_value'>English,hindi   </span></li>
              <li> <span className='about_heading'>Phone:</span> <span className='about_value'>9456769021  </span></li>
              <li> <span className='about_heading'>Email:</span> <span className='about_value'>rawat.abhishek41@gmail.com  </span></li>
              {/* <li> <span>Website:-</span> <span>   </span>www.google.com</li> */}
            </ul>
          {/* <h2> <span>Name:-</span> Abhishek Rawat</h2>
            <h2> <span>Address:-</span> 21</h2>
            <h2> <span>Language:-</span> English</h2>
            <h2> <span>Phone:-</span> 1234567890</h2>
            <h2> <span>Email:-</span> 6vLpF@example.com</h2>
            <h2> <span>Website:-</span> www.google.com</h2> */}
            <div className='hob_container'>
                <label> <ImHeadphones />Music</label>
                <label> <ImHeadphones />Travel</label>
                <label> <ImHeadphones />Movie</label>
                <label> <ImHeadphones />Sports</label>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Aboutme
