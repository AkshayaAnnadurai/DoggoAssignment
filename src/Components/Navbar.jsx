import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const logout=()=>{
    localStorage.clear();
    navigate('/login') 
    alert("Logged Out")
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Doggo</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={require("../assets/icon/menu.png")}></img>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/breed">BreedList</NavLink>
            </li>
            <li>
              <NavLink to="/details">BreedDetails</NavLink>
            </li>
            <li>
              <button onClick={logout} >LOGOUT</button>
            </li>
          </ul>
       </div>
      </div>
    </nav>
  )
}

export default Navbar