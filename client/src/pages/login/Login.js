import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const navigate=useNavigate();

    const [credential, setCredential]=useState({
        username:undefined,
        password:undefined,
    });

    const {loading,error,dispatch}=useContext(AuthContext);
   

    const handleChange=(e)=>{
        setCredential(prev=>({...prev,[e.target.id]:e.target.value}));
    }

    const handleClick=async e=>{
        e.preventDefault();  //bitno stavit da se ne refresha onovno stranica!
        dispatch({type:"LOGIN_START"})
        try{
            const res=await axios.post("/auth/login",credential);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            navigate("/");
        }
        catch(err){
            dispatch({type:"ERROR_FAILURE",payload:err.response.data});
        }
    }

  return (
    <div className="login">
     <div className="lContainer">
        <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Enter username" 
        id="username" 
        className="lInput"
        />
        <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Enter password" 
        id="password" 
        className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        {
            error && <span>{error.message}</span>
        }        
     </div>
    </div>
  )
}

export default Login
