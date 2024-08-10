
import React, { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import data from '../pages/Aboutus/AccordeonData';
import "./Accordeon.css";


const AccordionItem = ({ title, content, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{title}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
       </button>
   
        <div ref={contentHeight} className="answer-container" style={
             isOpen
             ? { height: contentHeight.current.scrollHeight }
             : { height: "0px" }
            }>
         <p className="answer-content">{content}</p>
        </div>
      </div>
     )
   }


   const Accordeon = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='container'>
       {data.map((item, index) => (
        
       <AccordionItem
        key={index}
        title={item.title}
        content={item.content}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
      ))}
     </div>
    )
   };
   
   export default Accordeon;