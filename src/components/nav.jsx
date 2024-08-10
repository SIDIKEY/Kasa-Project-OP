import React from "react"
import { NavLink } from "react-router-dom";
import "./nav.css"
import LOGO from "../images/LOGO.png" 

function Nav() {
    return <nav className="nav_bar">
             <div className="Home_logo">
              <img src={LOGO} alt="logo" />
              
             </div>
             <div className="navigation_links">
             <NavLink to="/">
             <p>Accueil</p>
  
             </NavLink>
             <NavLink to="/aboutus">
             <p>A propos</p>

             </NavLink>
              
              
              
             </div>
             

           </nav>
  }
  
  export default Nav
  