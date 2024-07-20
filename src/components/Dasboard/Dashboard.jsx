import React from 'react'
import { useState } from 'react'
import  "../../scss/Dashboard.scss"
import image from '../../images/photo4.jpg'
// import wlcmImg from '../../images/banner-img.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Alert from '../Notifier/Alert';
import Sucess from '../Notifier/Sucess';
import CreatePosts from '../../Pages/CreatePosts'


const Dashboard = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [showSucess, setShowSucess] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  const toggleAlert=(msg)=>{
    setAlertMsg(msg)
    setShowAlert(!showAlert)
  }

  const toggleSucess=(msg)=>{
    setSuccessMsg(msg)
    setShowSucess(!showSucess)
  }
  return (
    <>  
   { showAlert && <Alert handleToggler={toggleAlert} msg={alertMsg}/>}
   { showSucess && <Sucess handleToggler={toggleSucess} msg={successMsg}/>}
    <div className='dash_page'>


   {/* NAVBAR CONTAINER  */}
        <div className='nav_container'>
      
        <IoMdMenu className='toggle_icondash' />
            <div className='nav_search'>
           
                <input type='text' name='search' placeholder='Search here'></input>

            </div>
            <div className='nav_profile'> 
            
<img src={image} alt='profile'></img>
            </div>
             </div>
            

             <div  className='dash_sidemenu'>

                  <ul>
                    <li>Dashboard <IoIosArrowForward  className='das_aricon'/></li>
                    <li>AddPost <IoIosArrowForward className='das_aricon'/></li>
                    <li>Logout <IoIosArrowForward className='das_aricon'/></li>
                  </ul>

                </div>
               
                {/* content_container */}
                <div className='dash_content'>

                  {/* content welcome  */}
                  {/* <div className='das_wlcm'>
                  <img src={ wlcmImg} alt='profile'/>
                  <div className='das_wlcm_text'>
                  <h1>Welcome Back</h1>
                  <h3>Hello, Abhishek Rawat</h3>
                  <p>i am full stack web devloper .</p>
                  </div>
                 

                  </div> */}

                  {/* content posts  */}

                  <CreatePosts Sucess={toggleSucess} Alert={toggleAlert}/>
                  

             </div>

    
      
    </div>
    </>
  )
}

export default Dashboard
