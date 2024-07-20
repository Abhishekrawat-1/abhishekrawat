import React from 'react'
import '../scss/footer.scss'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='footer_column'>
        <h1> Links</h1>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILL</li>
            <li>PROJECT</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>SERVICE</li>
          </ul>

        </div>
        <div className='footer_column'>

        <h1> Services</h1>
          <ul>
            <li>web Design</li>
            <li>web Devlopment</li>
            <li>Web Application</li>
            <li>Banner Design</li>
            <li>Logo Design</li>
          </ul>

        </div>
        <div className='footer_column'>
          <h1>have a Questions?</h1>
          <ul>
            <li>Abhishek Rawat</li>
            <li>Shanti Nagar Dhalwala Rishikesh Uttarakhand</li>
            <li>9456769021</li>
            <li>rawat.abhishek41@gmail.com</li>
          </ul>

        </div>
      <div className='footer_copyright'>
        <p>Copyright &copy; {currentYear}. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer