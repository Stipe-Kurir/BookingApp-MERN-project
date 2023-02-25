import "./register.css"
import React from 'react'
import  {useRef} from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate=useNavigate();
  const [success,setSuccess]=useState(false);
  const[error,setError]=useState(false);
  const nameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();

  const handleSubmit =async(e)=>{
    e.preventDefault();

    const newUser={
      username:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
    };
    try{
      await axios.post("/auth/register",newUser);
      setError(false);
      setSuccess(true);
    }catch(err){
      setError(true);
      console.log(err);
    }

  }

  const handleLogin=()=>{
    navigate("/login")
    
  }

  return (
    <div className="register">
    <div className="rContainer">
      <form onSubmit={handleSubmit}>
       <input 
       type="text" 
       placeholder="Enter username" 
       className="rInput"
       ref={nameRef}
       />
        <input 
       type="email" 
       placeholder="Enter email" 
       className="rInput"
       ref={emailRef}
       />
       <input 
       type="password" 
       placeholder="Enter password" 
       className="rInput"
       ref={passwordRef}
       />
       <button className="rButton" type="submit">Register</button>
       { success && (
        <div>
            <span className="success">Successfull. You can login now!</span>
            <button onClick={handleLogin} className="rButton">Login</button>
            </div>
            )}
            { error && (
            <span className="failure">Something went wrong!</span>
            )}
       </form>
    </div>
   </div>
  )
}

export default Register
