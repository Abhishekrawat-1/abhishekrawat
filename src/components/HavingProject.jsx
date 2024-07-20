import React from 'react'
import profile from '../images/profile.png'
import '../scss/havingproject.scss'

const HavingProject = () => {
  return (
    <div className='having_project'>
        <div className='text_conainer'> 
      <h1>Have a project on your mind.</h1>
      <p>Let's discuss it.</p> 
      <button>Contact Me</button>
      </div>
      <div className='profile_pics'>
        <img src={profile} alt='profile'/>
      </div>
    </div>
  )
}

export default HavingProject
