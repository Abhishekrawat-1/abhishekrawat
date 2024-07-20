import React, { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import{ jwtDecode} from 'jwt-decode'; // Import JWT decode library

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const[domainName]=useState(`http://localhost:80`);
    const loginURL = `/api/login`;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [feedbackMsg, setFeedbackMsg] = useState("");
    const [isSuccess,setisSuccess]=useState(false);
  
    const navigate = useNavigate();

    useEffect(() => {
        const validateToken = async () => {
            setLoading(true); 
            if (token) {
                try {
                    const decodedToken = jwtDecode(token); 
                    setUser(decodedToken);
                    setLoading(false); 
                } catch (error) {
                    console.error("Token validation error:", error);
                    logout(); 
                    setLoading(false); 
                }
            } else {
                setLoading(false);
            }
        };
    
        validateToken();
    }, [token]);
    

    const setError=(msg)=>{
        setFeedbackMsg(msg);
        setisSuccess(false);
    }

    const setSuccess=(msg)=>{
        setFeedbackMsg(msg);
        setisSuccess(true);
    }
    const loginAction = async (data) => {
        setLoading(true);
       
        try {
            const response = await axios.post(loginURL, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
               
            });
            if (response.data && response.data.token) {
                const jwtToken = response.data.token;

                // Store token in local storage
                setToken(jwtToken);
                localStorage.setItem("token", jwtToken);

                // Decode token to get user data
                const decodedToken = jwtDecode(jwtToken);
                setUser(decodedToken);
              
                
                const userRole = decodedToken.Role;
                navigate(userRole === 'user' ? '/userdashboard' : '/admindashboard');
                setLoading(false);
            } else {
                throw new Error(response.data.message || "Invalid response from server");
            }
        } catch (err) {
            console.error("Error during login:", err.message);
            setError(err.message);
            // Handle error and show user-friendly message
        }

        console.log("User:", user);
    };
    const clearFeedbackMsg = () => {
        setFeedbackMsg('')
    }

    const logout = () => {
        // Clear user data and token
        setUser(null);
        setToken('');
        localStorage.removeItem('token');
        // Redirect to login page
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{domainName, token, loading, user, loginAction, setError,setSuccess,isSuccess, logout,feedbackMsg,clearFeedbackMsg}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
