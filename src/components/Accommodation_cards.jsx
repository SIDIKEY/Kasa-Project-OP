import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Accomodation_cards.css"






  
   
   const DisplayCards = ({ id, cover, title }) => {
    const value = `/accomodation/${id}` ;
    
 

 return (
  <>
    {
    
    <div className="grid_items">
      

    <Link to={value}  state={{lodgingId: `${id}`}} className="linkDiv">
      <img src={cover} className="card_cover" alt="accomodation cover" width="340" height="360" />
      <p className="card_title"> {title} </p>
    </Link>
      
      
     
   
    </div>
    
}   
  </>
)}; 
export default DisplayCards

