import React, { useState } from 'react'
// import { useAuth} from '../authProvider/AuthProvider'
import "./login.css"
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Nav2';
import Alert from '../Notifier/Alert';
import Sucess from '../Notifier/Sucess';
// import Description from '../../components/description/Description';

const Login = () => {
    const [formData, setformData]= useState({ username:'',password:''})
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [showSucess, setShowSucess] = useState(false);
    const url="/api/login";

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setformData({...formData,[name]:value})
    };

    const handleSucess=()=>{
        setShowSucess(!showSucess);
    }

    const handleAlert=()=>{
        setShowAlert(!showAlert);
    }
    //  auth is the context api
    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(formData.username !=="" && formData.password !==""){
                try {
                    
                    const response = await axios.post(url, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                    if(response.data.status==200){
                        const token = response.data.token;
                        localStorage.setItem('token', token);
                    Navigate('/dashboard');
                    }else{
                        setAlertMsg(" Login Failed");
                        handleAlert();

                    }
                } catch (error) {
                    setAlertMsg(" Login Failed".error);
                    handleAlert();
                }
            
        }else{
            setAlertMsg(" Login Failed");
            handleAlert(); 

        }
//  implement login and logic here
// clear form fields and errror on successfully login
        setformData({username:"",password:""})

    }
  return (
    // **LOGIN PAGE:- main container in which login form will be displayed**
    <div className='login-page'>
        { showAlert && <Alert handleToggler={handleAlert} msg={alertMsg}/>}
        { showSucess && <Sucess handleToggler={handleSucess} msg="Login Successful"/>}
<div style={{ backgroundColor: "#40404F", height: "3rem" }}>
<Navbar/>
</div>

        {/* <Description/> */}
        <div className='login_box'>
        <h2> Login</h2>
  
        <form onSubmit={handleSubmit}>
        <div className='login_formgroup'>
            <label htmlFor='username'> username</label>
            <input
            type='email'
            id="username"
            name='username'
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            required
            />

            <label htmlFor='password'> password</label>
            <input
            type='password'
            id="password"
            name='password'
            placeholder='Enter your Password'
            value={formData.password}
            onChange={handleChange}
            required
            />
            <Link to="/forgotpassword">Forgot password</Link>
           <button type='submit'>Login</button>
           </div>
        </form>
        
        
        </div>
      
    </div>
  )
}

export default Login
