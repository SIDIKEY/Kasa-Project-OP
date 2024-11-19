
import React, { useRef, useState } from 'react';
import Nav from '../../components/nav.jsx';
import AboutBanner from "../../components/Aboutus_banner.jsx";
import data from "./AccordeonData.js";
import Dropdown from "../../components/Dropdown.jsx";
import "./../Aboutus/Aboutus.css"


  

function Aboutus(){

  const [activeIndex, setActiveIndex] = useState(null);


  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
   };
  
    return <div >
            <Nav />
            <AboutBanner />

            <div className='dropdowns_container'>
              {data.map((item, index) => (
        
                 <Dropdown
                  key={index}
                  title={item.title}
                  content={item.content}
                  
                  isOpen={activeIndex === index}
                  onClick={() => handleItemClick(index)}
                  />
              ))}

            </div>

            
            
           </div>
}

export default Aboutus;