import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "../../components/nav";
import Cover from "../../images/Temporary_cover.jpg"
import AccomodationComponent from "../../components/AccomodationComponent";

function Accomodationselected(){
    
    const location = useLocation();
    console.log("location:", location);    
        return  <div>
                   <Nav />
                   
                <AccomodationComponent lodgingId={location.state.lodgingId}/>
                </div>
        
}

export default Accomodationselected;