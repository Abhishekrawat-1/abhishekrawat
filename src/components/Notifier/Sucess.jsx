import React from 'react'
import sucessimg from '../../images/success.png'
import '../../scss/sucess.scss';
import { RiCloseLargeFill } from "react-icons/ri";

const Sucess = ({ handleToggler, msg}) => {
  return (
    <div className='sucessBoxbg'>
    <div className='sucess_container'>
    <RiCloseLargeFill  onClick={handleToggler} className='close_icon' />
    <img src={sucessimg} alt='sucess'/>
        <h1>Sucess</h1>
        <p> {msg} </p>
    </div>
  
</div>
)
}

export default Sucess
