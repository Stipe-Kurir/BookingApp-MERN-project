import "./register.css"
import React from 'react'

const Register = () => {
  return (
    <div className="register">
    <div className="rContainer">
       <input 
       type="text" 
       //onChange={handleChange} 
       placeholder="Enter username" 
       id="username" 
       className="rInput"
       />
        <input 
       type="email" 
       //onChange={handleChange} 
       placeholder="Enter email" 
       id="email" 
       className="rInput"
       />
       <input 
       type="password" 
       //onChange={handleChange} 
       placeholder="Enter password" 
       id="password" 
       className="rInput"
       />
       <button className="rButton">Register</button>
    </div>
   </div>
  )
}

export default Register
