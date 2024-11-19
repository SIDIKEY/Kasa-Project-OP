import React from "react";
import "./Dropdown.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from "react";


function Dropdown({title, content, onClick}){


    const contentHeight = useRef()
    const drop = document.getElementsByClassName("dropdown_content");
    console.log(drop)
    
    


    const [isOpen, setIsOpen] = useState(false)
    const dropdownFn = () => {
        setIsOpen(!isOpen)

    }
     
    
    
    console.log({content})
    
    return <div className="dropdown">
             <div className="dropdown_header"> 
                <span>
                    {title}
                </span>
                <FontAwesomeIcon icon={faChevronDown} className={isOpen ? 'activeDrop' : ''} onClick={dropdownFn}/>

             </div>
             {isOpen &&  <div className="dropdown_content" ref={contentHeight} style={
             isOpen
             ? console.log(drop.scrollHeight)
             : console.log("yeahhhhhhh")
            }>

                {content}

                


             </div>}
    </div>
}

export default Dropdown