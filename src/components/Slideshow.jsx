import React from "react";
import "../components/Slideshow.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft}  from '@fortawesome/free-solid-svg-icons'
import {faChevronRight}  from '@fortawesome/free-solid-svg-icons'

function Slideshow({lodgingCover}){
    return <div>
             <div className="slideshow_wrapper">

               <img src={lodgingCover} alt="lodging cover" className="lodging_cover"/> 
               
               <FontAwesomeIcon icon={faChevronLeft} className="arrow_left" />
               <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                
             </div>
    </div>
}

export default Slideshow