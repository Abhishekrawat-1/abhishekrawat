import React from 'react'
import '../../scss/Alert.scss'
import { RiCloseLargeFill } from "react-icons/ri";

const Alert = ({handleToggler,msg}) => {

  return (
    <div className='alertBoxbg'>
        <div className='alert_container'>
        <RiCloseLargeFill  onClick={handleToggler} className='close_icon' />
            <h1>Alert</h1>
            <p>{msg}</p>
        </div>
      
    </div>
  )
}

export default Alert
