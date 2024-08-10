import React from "react";
import { useState } from "react";

const AccordionContainer = ({ section, isActiveSection }) => {
    return (
        <div>
            <div>
                {section.title}  
            </div> 
            {isActiveSection && 
            <div>
                {section.content}
            </div>}
            
        </div>
        
    )
};



const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div>
            {sections.map((section, index) => (
                <AccordionContainer section={section} key={index} isActiveSection={index === activeIndex} />
            ))}
        </div>
    )

};

export default Accordion