import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate=useNavigate();
  const {user,dispatch}=useContext(AuthContext);

  
  const handleLogin=()=>{
    navigate("/login")
    
  }


  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})
    navigate("/");
  }


  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
            <span className="logo">BookingApp</span>
            </Link>
            {user ? (
            <div className="navItems">
              <button onClick={handleLogout} className="navButton">Log out</button>
              <span className="username">{user.username}</span>
          </div>) : (
              <div className="navItems">
              <button className="navButton">Register</button>
              <button onClick={handleLogin} className="navButton">Log in</button>
          </div>
              )}
        </div>

    </div>
  )
}

export default Navbar
