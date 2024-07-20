import React from 'react';
import { useEffect, useState } from 'react';
// import { useAuth } from '../authProvider/AuthProvider';
import axios from 'axios';
import "./resetpassword.css";

const ResetPassword = () => {
    // const {domainName}= useAuth();
    const sendOTPURL= `/api/signup/resetpasswordotp`;
    const verifyOtpURL= `/api/signup/confirmresetpasswordotp`;
    const [steps, setSteps] = useState(1)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [userValues, setUserValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',

    })

    const handleChange = (e) => {
       setUserValues({...userValues, [e.target.name]: e.target.value})
    }

    const sendOTP = async() => {
        setSteps((prev) => prev + 1)
        // const fromdata= new FormData();
        // fromdata.append('email', userValues.email);
        const params = new URLSearchParams();
      params.append('email', userValues.email);
        try {
         const response= await axios.post(sendOTPURL, params);
         if(response.data && response.data.message){
            setSuccess(response.data.message)
   
        } 
        }catch (error) {
            console.log(error)
          setError(error && error?.response?.data?.message? error?.response?.data?.message : 'Something went wrong');  
        }
       

    }

    const handleverifyOtp = async() => {
        const fromdata= new FormData();
        fromdata.append('otp', userValues.otp);
        fromdata.append('password', userValues.password);
        fromdata.append('email', userValues.email);
        fromdata.append('confirmPassword', userValues.confirmPassword);
try {
    const response= await axios.post(verifyOtpURL, fromdata,{ withCredentials: true });
    if(response.data && response.data.message){
        setSuccess(response.data.message)
        setSteps((prev) => prev + 1)
    }
} catch (error) {
    setError(error && error.response.data.message? error.response.data.message : 'Something went wrong');
}
       
    }


    useEffect(() => {
        const resetSuccessAndError = () => {
            setTimeout(() => {
                setSuccess(''); 
                setError('');
            }, 4000);
        };
        resetSuccessAndError();
    }, [success, error])
    useEffect(() => {
      
        renderFormsteps()
    }, [steps])


    const renderFormsteps = () => {
        switch (steps) {
            case 1:
                return( <div className='resetPasswordformBox'>
                    <h4>Enter Email</h4>
                    <input type="email" placeholder='Enter Email'  name='email' value={userValues.email} onChange={ handleChange } />
                <button onClick={sendOTP}>SendOTP</button>
                 </div>)
                  break
            case 2:
                return( <div className='resetPasswordformBox'>
                    <h4>Enter OTP and New Password</h4>
                    <input type="text" placeholder='Enter OTP' name='otp' onChange={ handleChange } value={userValues.otp} />
                    <input type="text" placeholder='Enter New Password' name='password' onChange={ handleChange } value={userValues.password} />
                    <input type="text" placeholder='Enter Confirm Password' name='confirmPassword' onChange={ handleChange } value={userValues.confirmPassword} />
                <button onClick={handleverifyOtp}>"Verify OTP</button>
                 </div>)
                  break
            case 3:
                return( <div className='resetPasswordformBox'>
                <h4>Password Reset Successfully</h4>
              <p>"Your password has been successfully reset. Please proceed to log in now."</p>
            <button onClick={sendOTP}>Login</button>
             </div>)
              break
            default:
               
        }
    }

  return (
    <div className='resetPassword_container'>
    {success && <div className='notify_box resetPassword_sucess'><h4>{success}</h4></div>}
    {error && <div className=' notify_box resetPassword_error'><h4>{error}</h4></div>}
        {renderFormsteps()}
      
    </div>
  )
}

export default ResetPassword
