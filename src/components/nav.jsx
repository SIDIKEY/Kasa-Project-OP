import React from "react"
import { NavLink } from "react-router-dom";
import "./nav.scss"
import LOGO from "../images/LOGO.png" 

function Nav() {
    return <nav className="nav_bar">
             <div className="Home_logo">
              <img src={LOGO} alt="logo" />
              
             </div>
             <div className="navigation_links">
             <NavLink to="/" className="nav_link">
             <p>Accueil</p >
  
             </NavLink>
             <NavLink to="/aboutus" className="nav_link">
             <p>A propos</p>

             </NavLink>
              
              
              
             </div>
             

           </nav>
  }
  
  export default Nav
  